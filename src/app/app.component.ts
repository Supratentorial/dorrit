import {Component} from '@angular/core';
import {ConverterService} from "./converter.service";
import {ShortTypesService} from "./short-types.service";
import {ExcludeTypesService} from "./exclude-types.service";

@Component({
  selector: 'app-root',
  providers: [ConverterService, ShortTypesService, ExcludeTypesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  convertedResults: string;
  toBeConvertedResults: string;

  constructor(private converterService: ConverterService) {

  }

  convertPathologyResults(): void {
    this.convertedResults = this.converterService.convertPathologyResults(this.toBeConvertedResults);
  }

  clearForm(){
    this.toBeConvertedResults = '';
    this.convertedResults = '';
  }

  reorderTests(){


  }
}
