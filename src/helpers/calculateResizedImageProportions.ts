import { ImageSizes } from '@/interfaces';

export const calculateResizedImageProportions = (
  originalImageProportions: ImageSizes,
): ImageSizes => {
  const { width, height } = originalImageProportions;

  const maximumSideLengthInPixels = 720;

  const isImageSmallerThanMaximumAllowed =
    width <= maximumSideLengthInPixels && height <= maximumSideLengthInPixels;

  if (isImageSmallerThanMaximumAllowed) {
    return { width, height };
  }

  const isWidthGreaterThanHeight = width > height;
  if (isWidthGreaterThanHeight) {
    const resizedWidth = maximumSideLengthInPixels;
    const resizedHeight = Math.round(
      (height * maximumSideLengthInPixels) / width,
    );

    return {
      width: resizedWidth,
      height: resizedHeight,
    };
  }

  const resizedWidth = Math.round((width * maximumSideLengthInPixels) / height);
  const resizedHeight = maximumSideLengthInPixels;

  return {
    width: resizedWidth,
    height: resizedHeight,
  };
};
