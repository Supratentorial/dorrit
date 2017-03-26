import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ClipboardModule} from "ngx-clipboard";
import { ExcludeTypesComponent } from './settings/settings.component';
import {InlineSVGModule} from "ng-inline-svg";

@NgModule({
  declarations: [
    AppComponent,
    ExcludeTypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
