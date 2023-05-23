import { ImageMetadata } from '@/interfaces';

export abstract class GetImageMetadataContract {
  abstract getMetadata(imagePath: string): Promise<ImageMetadata>;
}
