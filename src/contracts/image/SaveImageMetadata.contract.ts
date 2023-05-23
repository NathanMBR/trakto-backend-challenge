import { ImageMetadata } from '@/interfaces';

export abstract class SaveImageMetadataContract {
  abstract saveMetadata(metadata: ImageMetadata): Promise<void>;
}
