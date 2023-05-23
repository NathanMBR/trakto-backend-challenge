import { convertCompressFactorToQualityPercentage } from './convertCompressFactorToQualityPercentage';

describe('Convert Compress Factor To Quality Percentage Helper Test', () => {
  it('should convert the quality factor to 100', () => {
    const qualityFactor = convertCompressFactorToQualityPercentage(0);
    expect(qualityFactor).toBe(100);
  });

  it('should convert the quality factor to 1', () => {
    const qualityFactor = convertCompressFactorToQualityPercentage(0.99);
    expect(qualityFactor).toBe(1);
  });
});
