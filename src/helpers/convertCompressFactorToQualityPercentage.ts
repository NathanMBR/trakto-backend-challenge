export const convertCompressFactorToQualityPercentage = (
  compressFactor: number,
): number => {
  const maximumQualityPercentage = 100;
  const percentageConversor = 100;

  return maximumQualityPercentage - compressFactor * percentageConversor;
};
