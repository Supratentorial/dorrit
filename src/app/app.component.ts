import {Component} from '@angular/core';
import {ConverterService} from "./converter.service";

@Component({
  selector: 'app-root',
  providers: [ConverterService],
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
}
