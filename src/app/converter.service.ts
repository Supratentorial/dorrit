import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService{
  convertPathologyResults(toBeConverted : string){

    let pathologyResultString : string = toBeConverted.replace(/\s\s+/g, '\t');
  }
}
