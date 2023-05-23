import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs/promises';

import { DownloadAndSaveImageContract } from '@/contracts';
import { InvalidImageFormatException } from '@/errors';

@Injectable()
export class NodeDownloadAndSaveImageService extends DownloadAndSaveImageContract {
  async downloadAndSave(url: string) {
    try {
      const currentTimeInMilliseconds = Date.now();

      const originalFileName = url
        .split('/')
        .filter((url_split) => !!url_split)
        .pop();
      if (!originalFileName) {
        throw new HttpException(
          'Unable to recover the image file name',
          HttpStatus.BAD_REQUEST,
        );
      }

      const fileName = `${currentTimeInMilliseconds}_${originalFileName}`;

      const pathToSave = path.join(process.cwd(), 'uploads', fileName);
      const imageResponse = await fetch(url);

      const mimeType = imageResponse.headers.get('Content-Type');
      if (mimeType !== 'image/jpeg') {
        throw new InvalidImageFormatException();
      }
      const imageArrayBuffer = await imageResponse.arrayBuffer();
      const imageBuffer = Buffer.from(imageArrayBuffer);

      await fs.writeFile(pathToSave, imageBuffer);

      return pathToSave;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      console.error(error);
      throw new HttpException(
        'Unexpected internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
