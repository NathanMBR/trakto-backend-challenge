import { ImageMetadata } from '@/interfaces';

type MappedImageMetadata = ImageMetadata<string | number | void>;

export const mapBuffersFromPayloadToStrings = (
  payload: ImageMetadata,
): MappedImageMetadata => {
  const mappedPayload: MappedImageMetadata = {};

  Object.keys(payload).forEach((key) => {
    const payloadData = payload[key];

    const isPayloadDataInstanceOfBuffer = payloadData instanceof Buffer;
    if (isPayloadDataInstanceOfBuffer) {
      mappedPayload[key] = payloadData.toString();
      return;
    }

    mappedPayload[key] = payloadData;
  });

  return mappedPayload;
};
