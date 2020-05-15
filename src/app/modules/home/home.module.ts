import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { HomeGalleryItemComponent } from './components/home-gallery-item/home-gallery-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { HomeGalleryItemDetailsComponent } from './components/home-gallery-item-details/home-gallery-item-details.component';
import { NebularModule } from '../nebular/nebular.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { VgCoreModule, VgControlsModule  } from 'ngx-videogular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeGalleryComponent, HomeGalleryItemComponent, HomeComponent, HomeGalleryItemDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NebularModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxParallaxScrollModule,
    VgCoreModule,
    VgControlsModule
  ],
  exports: [HomeGalleryComponent, HomeGalleryItemComponent]
})
export class HomeModule { }
