import { ImageSizes } from '@/interfaces';

export abstract class GetImageSizesContract {
  abstract getSizes(imagePath: string): Promise<ImageSizes>;
}
