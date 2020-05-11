import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.15,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease-in',
    parallaxThrottleTime: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
