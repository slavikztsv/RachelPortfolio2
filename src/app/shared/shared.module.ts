import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NebularModule } from '../modules/nebular/nebular.module';
import { VgCoreModule, VgControlsModule } from 'ngx-videogular';



@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NebularModule,
    VgCoreModule,
    VgControlsModule
  ],
  exports: [
    VideoPlayerComponent
  ]
})
export class SharedModule { }
