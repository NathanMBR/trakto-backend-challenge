import { mapBuffersFromPayloadToStrings } from './mapBuffersFromPayloadToStrings';

describe('Map Buffers From Payload To Strings Helper Test', () => {
  it('should remove all buffers from a payload', () => {
    const { testNumber, testString, testBuffer } =
      mapBuffersFromPayloadToStrings({
        testNumber: 7,
        testString: 'test',
        testBuffer: Buffer.from('buffer'),
      });

    expect(testNumber).toBe(7);
    expect(testString).toBe('test');
    expect(testBuffer).toBe('buffer');
  });

  it('should not allow buffers to be returned', () => {
    const { testNumber, testString, testBuffer } =
      mapBuffersFromPayloadToStrings({
        testNumber: 16,
        testString: 'test2',
        testBuffer: Buffer.from('pass'),
      });

    expect(testNumber).toBe(16);
    expect(testString).toBe('test2');
    expect(testBuffer).not.toBe(Buffer.from('pass'));
    expect(testBuffer).toBe('pass');
  });
});
