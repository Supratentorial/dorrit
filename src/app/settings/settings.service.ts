/**
 * Created by blake on 26/03/2017.
 */

import {Injectable} from "@angular/core";
 import {ConverterService} from "../converter.service";
import * as _ from "lodash";
import {TestResult} from "../models/test-result";

@Injectable()
export class SettingsService {
  delimiter: string = "tsv";
  excludedTests: Array<string>;

  constructor() {
  }

  getUniqueTestNames(testResults : Array<TestResult>) {
    let uniqueTestNames = _.uniqWith(testResults, (testResult: TestResult) => {
      return testResult.type;
    });
    console.log(uniqueTestNames);
  }
}
