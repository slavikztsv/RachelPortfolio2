import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/shared/models/media.model';

@Component({
  selector: 'app-home-gallery-item',
  templateUrl: './home-gallery-item.component.html',
  styleUrls: ['./home-gallery-item.component.scss']
})
export class HomeGalleryItemComponent implements OnInit {
  @Input() media: Media;
  constructor() { }

  ngOnInit(): void {
    this.media = Object.assign({}, this.media);
  }

}
