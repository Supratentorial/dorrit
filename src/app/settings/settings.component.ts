import {Component, OnInit} from '@angular/core';
import {SettingsService} from "./settings.service";
import {ConverterService} from "../converter.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService, public converterService : ConverterService) {
  }

  ngOnInit() {

  }

  toggleTestResult(){
    console.log("toggling");
  }

}
