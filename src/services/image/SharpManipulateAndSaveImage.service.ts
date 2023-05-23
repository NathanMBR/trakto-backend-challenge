import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

import { ManipulateAndSaveImageContract } from '@/contracts';
import { ImageManipulationPayload } from '@/interfaces';
import { InvalidImageFormatException } from '@/errors';

@Injectable()
export class SharpManipulateAndSaveImageService extends ManipulateAndSaveImageContract {
  async manipulateAndSave(manipulationPayload: ImageManipulationPayload) {
    try {
      const {
        originalImagePath,
        manipulatedImagePath,
        resizeTo,
        qualityInPercentage,
      } = manipulationPayload;

      await sharp(originalImagePath)
        .resize(resizeTo)
        .jpeg({ quality: qualityInPercentage })
        .toFile(manipulatedImagePath);

      return;
    } catch (error) {
      throw new InvalidImageFormatException();
    }
  }
}
