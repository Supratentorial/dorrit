import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ClipboardModule} from "ngx-clipboard";
import {InlineSVGModule} from "ng-inline-svg";
import {SettingsComponent} from "./settings/settings.component";
import {ConverterService} from "./converter.service";
import {ShortTypesService} from "./short-types.service";
import {ExcludeTypesService} from "./settings/exclude-types.service";
import {SettingsService} from "./settings/settings.service";
import {TestTypeFilterPipe} from "./settings/test-type-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TestTypeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    InlineSVGModule
  ],
  providers: [ConverterService, ShortTypesService, ExcludeTypesService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
