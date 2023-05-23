import { Injectable } from '@nestjs/common';

import { DownloadAndSaveImageContract } from '@/contracts';

@Injectable()
export class FakeDownloadAndSaveImageService extends DownloadAndSaveImageContract {
  async downloadAndSave(url: string) {
    const originalFileName = url.split('/').pop();
    if (!originalFileName) {
      throw new Error('Empty filename');
    }

    return new Promise<string>((resolve) =>
      resolve(`/uploads/${originalFileName}`),
    );
  }
}
