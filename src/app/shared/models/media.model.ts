import { MediaType } from '../enums';

export class Media {
  public fileName: string;
  public type: MediaType;
  public thumbnailFileName: string;
  public folderName: string;
  public title: string;
  public description: string;
  public credits: string;
  public childMedia: Media[];

  constructor(
    fileName,
    type = MediaType.Image,
    thumbnailFileName = null,
    folderName = null,
    title = null,
    description = null,
    credits = null,
    childMedia = null,
  ) {
    this.fileName = fileName;
    this.type = type;
    this.thumbnailFileName = thumbnailFileName;
    this.folderName = folderName;
    this.title = title;
    this.description = description;
    this.credits = credits;
    this.childMedia = childMedia;
  }
}
