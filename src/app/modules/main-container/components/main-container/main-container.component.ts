import { Component, OnInit } from '@angular/core';
import { NbLayoutRulerService } from '@nebular/theme';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  private root = document.documentElement;
  private devicePixelRatio = window.devicePixelRatio;
  constructor(private layoutRulerService: NbLayoutRulerService) { }

  ngOnInit(): void {
    this.layoutRulerService.getDimensions().subscribe(
      dimentions => {
        console.log(dimentions);
        console.log(this.devicePixelRatio);
        // this.root.style.setProperty('--root-font-size', 100 / this.devicePixelRatio + '%');
      }
    );
  }

}
