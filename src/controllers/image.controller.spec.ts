import { Test, TestingModule } from '@nestjs/testing';

import { ImageController } from './image.controller';
import {
  DownloadAndSaveImageContract,
  GetImageMetadataContract,
  GetImageSizesContract,
  ManipulateAndSaveImageContract,
  SaveImageMetadataContract,
} from '@/contracts';
import {
  FakeDownloadAndSaveImageService,
  FakeGetImageMetadataService,
  FakeGetImageSizesService,
  FakeManipulateAndSaveImageService,
  FakeSaveImageMetadataService,
} from '../../test';

describe('ImageController Unitary Tests', () => {
  let imageController: ImageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImageController],
      providers: [
        {
          provide: DownloadAndSaveImageContract,
          useClass: FakeDownloadAndSaveImageService,
        },

        {
          provide: GetImageMetadataContract,
          useClass: FakeGetImageMetadataService,
        },

        {
          provide: GetImageSizesContract,
          useClass: FakeGetImageSizesService,
        },

        {
          provide: ManipulateAndSaveImageContract,
          useClass: FakeManipulateAndSaveImageService,
        },

        {
          provide: SaveImageMetadataContract,
          useClass: FakeSaveImageMetadataService,
        },
      ],
    }).compile();

    imageController = app.get<ImageController>(ImageController);
  });

  it('should successfully process an image', () => {
    const processedImageData = imageController.save({
      image: 'https://test.com/example_image.jpeg',
      compress: 0,
    });

    expect(processedImageData).resolves.not.toThrow();
    expect(processedImageData).resolves.toHaveProperty('localpath');
    expect(processedImageData).resolves.toHaveProperty(
      'localpath.original',
      '/uploads/example_image.jpeg',
    );
    expect(processedImageData).resolves.toHaveProperty(
      'localpath.thumb',
      '/uploads/example_image_thumb.jpg',
    );
    expect(processedImageData).resolves.toHaveProperty('metadata');
  });
});
