export abstract class DownloadAndSaveImageContract {
  abstract downloadAndSave(url: string): Promise<string>;
}
