import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/shared/models/media.model';
import { MediaType } from 'src/app/shared/enums';
import { NbDialogRef } from '@nebular/theme';
import { VgAPI } from 'ngx-videogular';
import { Subscription, timer } from 'rxjs';

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
  constructor(protected ref: NbDialogRef<HomeGalleryItemDetailsComponent>) { }

  ngOnInit(): void {
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onCloseClick(): void {
    this.ref.close();
  }

  onPrevMediaClick() {
    if (this.mediaArray[this.currentMediaIndex - 1]) {
      this.selectedMedia = this.mediaArray[this.currentMediaIndex - 1];
    } else {
      this.selectedMedia = this.mediaArray[this.mediaArray.length - 1];
    }
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onNextMediaClick() {
    if (this.mediaArray[this.currentMediaIndex + 1]) {
      this.selectedMedia = this.mediaArray[this.currentMediaIndex + 1];
    } else {
      this.selectedMedia = this.mediaArray[0];
    }
    this.currentMediaIndex = this.mediaArray.indexOf(this.selectedMedia);
  }

  onClickChildMedia(selectedChildMedia: Media) {
    this.selectedMedia.type = selectedChildMedia.type;
    // if (selectedChildMedia.type === MediaType.Video && this.api) {
    //   this.api.getDefaultMedia().subscriptions.play.subscribe(
    //     () => {
    //         this.api.unregisterMedia(this.api.getDefaultMedia());
    //         this.api.registerMedia(this.api.getMediaById(selectedChildMedia.fileName));
    //     }
    // );
    // }
    this.selectedMedia.fileName = selectedChildMedia.fileName;
    this.selectedMedia.thumbnailFileName = selectedChildMedia.thumbnailFileName;
    this.selectedMedia.type = selectedChildMedia.type;
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
}

}
