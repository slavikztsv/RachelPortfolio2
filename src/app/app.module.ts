import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainContainerModule } from './modules/main-container/main-container.module';
import { HomeModule } from './modules/home/home.module';
import { ContactModule } from './modules/contact/contact.module';
import { AboutMeModule } from './modules/about-me/about-me.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NbThemeModule.forRoot({ name: 'custom-light-theme' }),
    NbDialogModule.forRoot({autoFocus: false}),
    NbLayoutModule,
    NbEvaIconsModule,
    MainContainerModule,
    HomeModule,
    ContactModule,
    AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }