import { calculateResizedImageProportions } from './calculateResizedImageProportions';

describe('Calculate Resized Image Proportions Helper Test', () => {
  it('should resize the image proportions when width is greater', () => {
    const { width, height } = calculateResizedImageProportions({
      width: 1920,
      height: 1080,
    });

    expect(width).toBe(720);
    expect(height).toBe(405);
  });

  it('should resize the image proportions when height is greater', () => {
    const { width, height } = calculateResizedImageProportions({
      width: 1080,
      height: 2560,
    });

    expect(width).toBe(304);
    expect(height).toBe(720);
  });

  it('should resize both sides to 720', () => {
    const { width, height } = calculateResizedImageProportions({
      width: 900,
      height: 900,
    });

    expect(width).toBe(720);
    expect(height).toBe(720);
  });

  it('should not resize the image proportions', () => {
    const { width, height } = calculateResizedImageProportions({
      width: 652,
      height: 437,
    });

    expect(width).toBe(652);
    expect(height).toBe(437);
  });
});
