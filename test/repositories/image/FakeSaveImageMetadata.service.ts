import { Injectable } from '@nestjs/common';

import { SaveImageMetadataContract } from '@/contracts';
import { ImageMetadata } from '@/interfaces';

@Injectable()
export class FakeSaveImageMetadataService extends SaveImageMetadataContract {
  async saveMetadata(_metadata: ImageMetadata) {
    return new Promise<void>((resolve) => resolve());
  }
}
