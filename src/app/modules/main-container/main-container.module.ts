import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { NebularModule } from '../nebular/nebular.module';



@NgModule({
  declarations: [MainContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    NebularModule,
    NgxParallaxScrollModule
  ],
  exports: [
    MainContainerComponent, HeaderComponent
  ]
})
export class MainContainerModule { }
