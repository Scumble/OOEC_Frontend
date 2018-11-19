import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { routing }  from './stream.routing';
import { StreamComponent } from './stream/stream.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [StreamComponent],
  providers:    [ ]
})
export class StreamModule { }