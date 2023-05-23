import { Injectable } from '@nestjs/common';

import { GetImageMetadataContract } from '@/contracts';
import { ImageMetadata } from '@/interfaces';

@Injectable()
export class FakeGetImageMetadataService extends GetImageMetadataContract {
  async getMetadata(_imagePath: string) {
    const metadata = {
      ExposureTime: 0.00000222,
      FNumber: 3.6,
      ExposureProgram: 1,
      ISO: 160,
      ExifVersion: '0232',
      DateTimeOriginal: '2001:01:01 12:00:00',
      CreateDate: '2001:01:01 12:00:00',
      ShutterSpeedValue: 6,
      ApertureValue: 1,
      BrightnessValue: -0.000004445,
      ExposureCompensation: -1.44,
      MeteringMode: 5,
      Flash: 8,
      FocalLength: 6,
      SubSecTimeOriginal: '890',
      SubSecTimeDigitized: '890',
      ExifImageWidth: 1512,
      ExifImageHeight: 2016,
      SensingMethod: 2,
      ExposureMode: 0,
      WhiteBalance: 0,
      FocalLengthIn35mmFormat: 13,
      LensMake: 'FakeLens',
      LensModel: 'FakeLensModel',
    };

    return new Promise<ImageMetadata>((resolve) => resolve(metadata));
  }
}
