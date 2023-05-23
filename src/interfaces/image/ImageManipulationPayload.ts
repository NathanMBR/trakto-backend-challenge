import { ImageSizes } from './ImageSizes';

export interface ImageManipulationPayload {
  originalImagePath: string;
  manipulatedImagePath: string;
  resizeTo: ImageSizes;
  qualityInPercentage: number;
}
