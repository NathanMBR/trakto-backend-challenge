import { ImageManipulationPayload } from '@/interfaces';

export abstract class ManipulateAndSaveImageContract {
  abstract manipulateAndSave(
    imageManipulationPayload: ImageManipulationPayload,
  ): Promise<void>;
}
