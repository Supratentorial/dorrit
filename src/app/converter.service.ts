import {Injectable} from '@angular/core';
import {TestResult} from "./test-result";
import * as _ from "lodash";

@Injectable()
export class ConverterService {

  public static UNCOMMON_TEST_TYPE: string[] = [
    "Red cell count",
    "Haematocrit",
    "MCH",
    "MCHC",
    "MPV",
    "Lymphocytes",
    "Monocytes",
    "Eosinophils",
    "Basophils"
  ];

  convertPathologyResults(toBeConverted: string): string {
    //toBeConverted = this.convertToShortType(toBeConverted);
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

  static getTestDates(firstLine: string): string[] {
    let datesString: string = (firstLine.slice(20));
    let dateStringArray: string[] = [];
    for (let i = 0; i < datesString.length; i += 11) {
      let date: string = datesString.slice(i, i + 8);
      dateStringArray.push(date);
    }
    return dateStringArray;
  }

  convertToShortType(testType: string): string {
    let shortTestType: string = '';
    switch (testType) {
      case 'Sodium':
        shortTestType = 'Na';
        break;
      case 'Potassium':
        shortTestType = 'K';
        break;
      case 'Chloride':
        shortTestType = 'Chlor';
        break;
      case 'Bicarbonate':
        shortTestType = 'Bicarb';
        break;
      case 'Creatinine':
        shortTestType = 'Creat';
        break;
      case 'Creatine Kinase':
        shortTestType = 'CK';
        break;
      case 'Troponin I':
        shortTestType = 'Trop';
        break;
      case 'Corrected':
        shortTestType = 'Corr.';
        break;
      case 'Calcium':
        shortTestType = 'Ca';
        break;
      case 'Magnesium':
        shortTestType = 'Mg';
        break;
      case 'Phosphate':
        shortTestType = 'Phos';
        break;
      case 'Albumin':
        shortTestType = 'Alb';
        break;
      default:
        shortTestType = testType;
    }
    return shortTestType;
  }

  buildResultString(testResults: Array<TestResult>, dateStrings: string[]): string {
    let resultString: string = '';
    for (let i = 0; i < dateStrings.length; i++) {
      let testsByDate = _.filter(testResults, ['datePerformed', dateStrings[i]]);
      if (i > 0) {
        resultString += '\n';
      }
      resultString += dateStrings[i] + ' ';

      _.forEach(testsByDate, (testResult: TestResult) => {
        testResult.type = this.convertToShortType(testResult.type);
        resultString += testResult.type + ' ' + testResult.value + ' ';
      });
    }
    return resultString;
  }
}
