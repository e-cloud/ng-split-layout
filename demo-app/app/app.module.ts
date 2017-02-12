import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgSplitLayoutModule } from '../../lib';
import { MapComponent } from './map.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSplitLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
