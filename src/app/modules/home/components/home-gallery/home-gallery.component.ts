import { Component, OnInit } from '@angular/core';
import { Media } from 'src/app/shared/models/media.model';
import { HomeGalleryItemDetailsComponent } from '../home-gallery-item-details/home-gallery-item-details.component';
import { NbDialogService } from '@nebular/theme';
import { HomeService } from 'src/app/core/services/home.service';
import { MediaType } from 'src/app/shared/enums';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {
  public mediaArray: Media[];
  private mediaDetailsData: Partial<HomeGalleryItemDetailsComponent> = {};
  constructor(private dialogService: NbDialogService,
              private homeService: HomeService ) { }

  ngOnInit(): void {
    this.mediaArray = this.homeService.getMediaArray();
  }

  openDialog(selectedMedia: Media, mediaArray: Array<Media>): void {
    this.mediaDetailsData.selectedMedia = this.homeService.getSelectedMediaLogic(selectedMedia);
    this.mediaDetailsData.mediaArray = mediaArray;
    this.dialogService.open(HomeGalleryItemDetailsComponent, { context: this.mediaDetailsData, backdropClass: 'custom-backdrop' })
    .onClose.subscribe(() => {
      this.mediaArray = this.homeService.getMediaArray();
    });
  }

}
