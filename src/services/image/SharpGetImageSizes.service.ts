import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import sharp from 'sharp';

import { GetImageSizesContract } from '@/contracts';
import { InvalidImageFormatException } from '@/errors';

@Injectable()
export class SharpGetImageSizesService extends GetImageSizesContract {
  async getSizes(imagePath: string) {
    try {
      const { width, height } = await sharp(imagePath).metadata();

      if (!width || !height) {
        throw new HttpException(
          'Unable to recover the image size data',
          HttpStatus.BAD_REQUEST,
        );
      }

      return {
        width,
        height,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new InvalidImageFormatException();
    }
  }
}
