import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { NbLayoutScrollService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeGallery') homeGallery: ElementRef;
  scrollIconOpacity: number;
  public ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.15,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 0
  };

  constructor(private layoutScrollService: NbLayoutScrollService) {
    this.scrollIconOpacity = 1;
  }

  ngOnInit(): void {
    this.layoutScrollService.onScroll().subscribe(
      () => {
        this.layoutScrollService.getPosition().subscribe(
          position => {
            this.scrollIconOpacity = 1 - (position.y / 200);
          }
        );
      }
    );
  }

}
