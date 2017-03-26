/**
 * Created by blake on 12/12/2016.
 */
import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class ExcludeTypesService {
  uncommonTestTypes: string[] = [
    "Red cell count",
    "Haematocrit",
    "MCH",
    "MCHC",
    "MPV",
    "RDW",
    "Lymphocytes",
    "Monocytes",
    "Eosinophils",
    "Basophils"
  ];

  isUncommon(testType: string): boolean {
    let boob = false;

    boob = _.includes(this.uncommonTestTypes, testType);
    return boob;
  }

}
