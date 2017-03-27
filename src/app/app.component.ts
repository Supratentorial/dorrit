import {Component} from '@angular/core';
import {ConverterService} from "./converter.service";
import {ShortTypesService} from "./short-types.service";
import {ExcludeTypesService} from "./settings/exclude-types.service";
import * as _ from 'lodash';
import {SettingsService} from "./settings/settings.service";

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  convertedResults: string;
  toBeConvertedResults: string;
  settings: boolean = false;

  constructor(private converterService: ConverterService, private settingsService : SettingsService) {

  }

  convertPathologyResults(): void {
    this.convertedResults = this.converterService.convertPathologyResults(this.toBeConvertedResults);
  }

  clearForm() {
    this.toBeConvertedResults = '';
    this.convertedResults = '';
  }

  toggleSettings() {
    this.settings = !this.settings;
  }
}
