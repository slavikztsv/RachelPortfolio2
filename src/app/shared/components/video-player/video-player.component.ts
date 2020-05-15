import { Component, OnInit, Input } from '@angular/core';
import { VgAPI } from 'ngx-videogular';
import { Media } from '../../models/media.model';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() selectedMedia: Media;
  public api: VgAPI;
  constructor() { }

  ngOnInit(): void {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }

}
