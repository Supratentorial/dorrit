import {Injectable} from '@angular/core';

@Injectable()
export class ConverterService {

  convertPathologyResults(toBeConverted: string) {
    let lines: string[] = toBeConverted.split('\n');
    for(let i = 7; i< lines.length; i++){
      //let testNameString : string = lines[0].
    }
    let results: Array<any>;
    this.getDateStringArray(lines[0]);
  }

  getDateStringArray(firstLine: string) {
    let datesString: string = (firstLine.slice(20));
    let dateStringArray: string[] = [];
    for (let i = 0; i < datesString.length; i += 11) {
      let date: string = datesString.slice(i, i + 8);
      dateStringArray.push(date);
    }
    console.log(dateStringArray);
  }

  getTestNameAndCode(){

  }

  buildResultLine(date: string, tests: string[]):string{
    let resultLine = '';


    return resultLine;
  }
}
