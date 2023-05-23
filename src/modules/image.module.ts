import { Global, Module } from '@nestjs/common';

import {
  NodeDownloadAndSaveImageService,
  ExifGetImageMetadataService,
  SharpGetImageSizesService,
  SharpManipulateAndSaveImageService,
  MongooseSaveImageMetadataService,
} from '@/services';
import { ImageController } from '@/controllers';
import {
  DownloadAndSaveImageContract,
  GetImageMetadataContract,
  GetImageSizesContract,
  ManipulateAndSaveImageContract,
  SaveImageMetadataContract,
} from '@/contracts';

@Module({
  controllers: [ImageController],
  providers: [
    {
      provide: DownloadAndSaveImageContract,
      useClass: NodeDownloadAndSaveImageService,
    },

    {
      provide: GetImageMetadataContract,
      useClass: ExifGetImageMetadataService,
    },

    {
      provide: GetImageSizesContract,
      useClass: SharpGetImageSizesService,
    },

    {
      provide: ManipulateAndSaveImageContract,
      useClass: SharpManipulateAndSaveImageService,
    },

    {
      provide: SaveImageMetadataContract,
      useClass: MongooseSaveImageMetadataService,
    },
  ],
  exports: [],
})
export class ImageModule {}
