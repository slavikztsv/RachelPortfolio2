import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NebularModule } from '../nebular/nebular.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    NebularModule,
    FlexLayoutModule
  ]
})
export class AboutMeModule { }
