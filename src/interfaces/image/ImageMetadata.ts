type ImageMetadataProperty = string | number | Buffer | void;

export type ImageMetadata<
  T extends ImageMetadataProperty = ImageMetadataProperty,
> = Record<string, T>;
