import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ExifImage } from 'exif';

import { GetImageMetadataContract } from '@/contracts';
import { ImageMetadata } from '@/interfaces';

@Injectable()
export class ExifGetImageMetadataService extends GetImageMetadataContract {
  async getMetadata(imagePath: string) {
    return new Promise<ImageMetadata>((resolve, reject) => {
      new ExifImage({ image: imagePath }, (error, imageMetadata) => {
        if (error) {
          return reject(
            new HttpException(
              "The image isn't supported or doesn't have EXIF metadata to extract",
              HttpStatus.BAD_REQUEST,
            ),
          );
        }

        const exifMetadata = imageMetadata.exif;
        return resolve(exifMetadata);
      });
    });
  }
}
