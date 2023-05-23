import { Controller, Post, Body, UseFilters } from '@nestjs/common';

import {
  DownloadAndSaveImageContract,
  GetImageMetadataContract,
  GetImageSizesContract,
  ManipulateAndSaveImageContract,
  SaveImageMetadataContract,
} from '@/contracts';
import {
  getManipulatedImagePath,
  convertCompressFactorToQualityPercentage,
  calculateResizedImageProportions,
  mapBuffersFromPayloadToStrings,
} from '@/helpers';
import { SaveImageDTO } from '@/dtos';
import { HttpExceptionFilter } from '@/filters';

@Controller('/image')
@UseFilters(HttpExceptionFilter)
export class ImageController {
  constructor(
    private readonly downloadAndSaveImageService: DownloadAndSaveImageContract,
    private readonly getImageMetadataService: GetImageMetadataContract,
    private readonly getImageSizesService: GetImageSizesContract,
    private readonly manipulateAndSaveImageService: ManipulateAndSaveImageContract,
    private readonly saveImageMetadataService: SaveImageMetadataContract,
  ) {}

  @Post('/save')
  async save(@Body() saveImageDTO: SaveImageDTO) {
    const imageURL = saveImageDTO.image;
    const compressFactor = saveImageDTO.compress;

    const originalImagePath =
      await this.downloadAndSaveImageService.downloadAndSave(imageURL);

    const [imageMetadata, originalImageSizes] = await Promise.all([
      this.getImageMetadataService.getMetadata(originalImagePath),
      this.getImageSizesService.getSizes(originalImagePath),
    ]);

    const manipulatedImagePath = getManipulatedImagePath(originalImagePath);

    const manipulatedImageQualityInPercentage =
      convertCompressFactorToQualityPercentage(compressFactor);

    const manipulatedImageSizes =
      calculateResizedImageProportions(originalImageSizes);

    await Promise.all([
      this.manipulateAndSaveImageService.manipulateAndSave({
        originalImagePath,
        manipulatedImagePath,
        qualityInPercentage: manipulatedImageQualityInPercentage,
        resizeTo: manipulatedImageSizes,
      }),

      this.saveImageMetadataService.saveMetadata(imageMetadata),
    ]);

    const mappedImageMetadata = mapBuffersFromPayloadToStrings(imageMetadata);

    return {
      localpath: {
        original: originalImagePath,
        thumb: manipulatedImagePath,
      },
      metadata: mappedImageMetadata,
    };
  }
}
