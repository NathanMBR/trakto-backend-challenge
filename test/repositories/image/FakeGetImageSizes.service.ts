import { Injectable } from '@nestjs/common';

import { ImageSizes } from '@/interfaces';

@Injectable()
export class FakeGetImageSizesService {
  async getSizes(imagePath: string) {
    return new Promise<ImageSizes>((resolve) =>
      resolve({
        width: imagePath.length * 16,
        height: imagePath.length * 9,
      }),
    );
  }
}
