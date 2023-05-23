import { Injectable } from '@nestjs/common';

import { ManipulateAndSaveImageContract } from '@/contracts';
import { ImageManipulationPayload } from '@/interfaces';

@Injectable()
export class FakeManipulateAndSaveImageService extends ManipulateAndSaveImageContract {
  async manipulateAndSave(_manipulationPayload: ImageManipulationPayload) {
    return new Promise<void>((resolve) => resolve());
  }
}
