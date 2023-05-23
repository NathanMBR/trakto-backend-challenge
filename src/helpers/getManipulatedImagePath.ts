export const getManipulatedImagePath = (imagePath: string): string => {
  const imagePathSplitted = imagePath.split('.');
  const manipulatedImagePath = imagePathSplitted[0] + '_thumb.jpg';
  return manipulatedImagePath;
};
