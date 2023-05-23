import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SaveImageMetadataContract } from '@/contracts';
import { ImageMetadata } from '@/interfaces';
import { ImageDocument } from '@/schemas';

@Injectable()
export class MongooseSaveImageMetadataService extends SaveImageMetadataContract {
  constructor(
    @InjectModel('imageSchema')
    private readonly imageModel: Model<ImageDocument>,
  ) {
    super();
  }

  async saveMetadata(metadata: ImageMetadata) {
    try {
      const metadataToSave = new this.imageModel(metadata);
      await metadataToSave.save();
      return;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Unexpected internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
