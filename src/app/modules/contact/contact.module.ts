import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NebularModule } from '../nebular/nebular.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NebularModule,
    FlexLayoutModule
  ]
})
export class ContactModule { }
