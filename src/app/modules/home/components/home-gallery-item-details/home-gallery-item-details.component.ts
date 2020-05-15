import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/shared/models/media.model';
import { MediaType } from 'src/app/shared/enums';
import { NbDialogRef } from '@nebular/theme';
import { VgAPI } from 'ngx-videogular';
import { Subscription, timer } from 'rxjs';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home-gallery-item-details',
  templateUrl: './home-gallery-item-details.component.html',
  styleUrls: ['./home-gallery-item-details.component.scss']
})
export class HomeGalleryItemDetailsComponent implements OnInit {
  public selectedMedia: Media;
  public mediaArray: Media[];
  public MediaType = MediaType;
  private currentMediaIndex: number;
  private api: VgAPI;
  constructor(protected ref: NbDialogRef<HomeGalleryItemDetailsComponent>,
              private homeService: HomeService) { }

  ngOnInit(): void {
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onCloseClick(): void {
    this.ref.close();
  }

  onPrevMediaClick() {
    if (this.mediaArray[this.currentMediaIndex - 1]) {
      this.selectedMedia = this.homeService.getSelectedMediaLogic(this.mediaArray[this.currentMediaIndex - 1]);
    } else {
      this.selectedMedia = this.homeService.getSelectedMediaLogic(this.mediaArray[this.mediaArray.length - 1]);
    }
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onNextMediaClick() {
    if (this.mediaArray[this.currentMediaIndex + 1]) {
      this.selectedMedia = this.homeService.getSelectedMediaLogic(this.mediaArray[this.currentMediaIndex + 1]);
    } else {
      this.selectedMedia = this.homeService.getSelectedMediaLogic(this.mediaArray[0]);
    }
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onClickChildMedia(selectedChildMedia: Media) {
    this.selectedMedia.type = MediaType.Image;
    setTimeout(() => {
      this.selectedMedia.type = selectedChildMedia.type;
    });
    this.selectedMedia.fileName = selectedChildMedia.fileName;
    this.selectedMedia.thumbnailFileName = selectedChildMedia.thumbnailFileName;
  }

}
