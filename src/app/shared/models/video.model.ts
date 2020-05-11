export class Video {
  fileName: string;
  videoName: string;
  title: string;
  description: string;

  constructor(
    fileName,
    videoName,
    title = null,
    description = null,
  ) {
    this.fileName = fileName;
    this.videoName = videoName;
    this.title = title;
    this.description = description;
  }
}
