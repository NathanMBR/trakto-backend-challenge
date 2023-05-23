import { getManipulatedImagePath } from './getManipulatedImagePath';

describe('Get Manipulated Image Path Helper Test', () => {
  it('should correctly convert the path', () => {
    const manipulatedPath = getManipulatedImagePath('/uploads/example.jpeg');

    expect(manipulatedPath.endsWith('_thumb.jpg')).toBe(true);
  });
});
