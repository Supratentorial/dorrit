import {Injectable} from '@angular/core';
import {TestResult} from "./test-result";
import * as _ from "lodash";
import {ShortTypesService} from "./short-types.service";
import {ExcludeTypesService} from "./exclude-types.service";

@Injectable()
export class ConverterService {

  constructor(private shortTypesService: ShortTypesService, private excludeTypesService: ExcludeTypesService) {

  }

  static isUrine(toBeConverted: string): boolean {
    return _.includes(toBeConverted, 'URINE MICROSCOPY AND CULTURE');

  }

  static isBlood(toBeConverted: string): boolean {
    return _.includes(toBeConverted, 'Collection Date:');

  }

  processUrine(toBeConverted): string {
    return 'urine';
  }

  processBlood(toBeConverted): string {
    let lines: string[] = toBeConverted.split('\n');
    let testResults: Array<TestResult> = [];
    let dateStrings = ConverterService.getTestDates(lines[0]);
    for (let i = 6; i < lines.length; i++) {
      let testType: string = lines[i].slice(0, 20).trim();
      for (let j = 0; j < dateStrings.length; j++) {
        let startPoint = 20 + j * 11;
        let endPoint = startPoint + 11;
        let testValue: string = lines[i].slice(startPoint, endPoint).trim();
        if (testValue) {
          let testResult: TestResult = {
            type: testType,
            value: testValue,
            datePerformed: dateStrings[j]
          };
          testResults.push(testResult);
        }
      }
    }

    return this.buildResultString(testResults, dateStrings);
  }


  convertPathologyResults(toBeConverted: string): string {
    if (ConverterService.isUrine(toBeConverted)) {
      return this.processUrine(toBeConverted);
    } else if (ConverterService.isBlood(toBeConverted)) {
      return this.processBlood(toBeConverted);
    }
  }

  static getBloodTestTypes(lines: string[]): string[]{
    let testTypes : string[] = [];
    for (let i = 6; i<lines.length; i++ ){
      let testType: string = lines[i].slice(0, 20).trim();
      testTypes.push(testType);
    }
    return testTypes;
  }

  static getBloodTestValues

  static getTestDates(firstLine: string): string[] {
    let datesString: string = (firstLine.slice(20));
    let dateStringArray: string[] = [];
    for (let i = 0; i < datesString.length; i += 11) {
      let date: string = datesString.slice(i, i + 8);
      dateStringArray.push(date);
    }
    return dateStringArray;
  }

  buildResultString(testResults: Array<TestResult>, dateStrings: string[]): string {
    let resultString: string = '';
    for (let i = 0; i < dateStrings.length; i++) {
      let testsByDate = _.filter(testResults, ['datePerformed', dateStrings[i]]);
      if (i > 0) {
        resultString += '\n';
      }
      resultString += dateStrings[i] + ' ';
      for (let i = testsByDate.length; i--;) {
        if (this.excludeTypesService.isUncommon(testsByDate[i].type)) {
          testsByDate.splice(i, 1);
        }
      }
      _.forEach(testsByDate, (testResult: TestResult) => {
        testResult.type = this.shortTypesService.getShortType(testResult.type);
        resultString += testResult.type + ' ' + testResult.value + ' ';
      });
    }
    return resultString;
  }
}
