import {Component, OnInit} from '@angular/core';
import {OfScore} from '../of-score.enum';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent implements OnInit {

  // public static readonly ASA: string;
  ASA = 'asa';
  DEMENTIA = 'dementia';
  BMI = 'bmi';
  DEPENDENT = 'dependent';
  ANTICOAGULATION = 'anticoagulation';
  SEVEN_RESULT = 'sevenResult';

  title = 'state of health';
  bg = 'success';
  next: string;

  asa: boolean;
  dementia: boolean;
  bmi: boolean;
  dependent: boolean;
  anticoagulation: boolean;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem(this.ASA) === 'true') {
      this.asa = true;
    }
    if (localStorage.getItem(this.DEMENTIA) === 'true') {
      this.dementia = true;
    }
    if (localStorage.getItem(this.BMI) === 'true') {
      this.bmi = true;
    }
    if (localStorage.getItem(this.DEPENDENT) === 'true') {
      this.dependent = true;
    }
    if (localStorage.getItem(this.ANTICOAGULATION) === 'true') {
      this.anticoagulation = true;
    }
    this.next = 'result';
  }

  select(button) {
    switch (button) {
      case 'asa': {
        this.asa = !this.asa;
        if (this.asa) {
          localStorage.setItem(this.ASA, 'true');
        } else {
          localStorage.setItem(this.ASA, 'false');
        }
        break;
      }
      case 'dementia': {
        this.dementia = !this.dementia;
        if (this.dementia) {
          localStorage.setItem(this.DEMENTIA, 'true');
        } else {
          localStorage.setItem(this.DEMENTIA, 'false');
        }
        break;
      }
      case 'bmi': {
        this.bmi = !this.bmi;
        if (this.bmi) {
          localStorage.setItem(this.BMI, 'true');
        } else {
          localStorage.setItem(this.BMI, 'false');
        }
        break;
      }
      case 'dependent': {
        this.dependent = !this.dependent;
        if (this.dependent) {
          localStorage.setItem(this.DEPENDENT, 'true');
        } else {
          localStorage.setItem(this.DEPENDENT, 'false');
        }
        break;
      }
      case 'anticoagulation': {
        this.anticoagulation = !this.anticoagulation;
        if (this.anticoagulation) {
          localStorage.setItem(this.ANTICOAGULATION, 'true');
        } else {
          localStorage.setItem(this.ANTICOAGULATION, 'false');
        }
        break;
      }
    }
    this.sevenResult();
  }

  private sevenResult() {
    let result = 0;
    if (localStorage.getItem(this.ASA) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.DEMENTIA) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.BMI) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.DEPENDENT) === 'true') {
      result--;
    }
    if (localStorage.getItem(this.ANTICOAGULATION) === 'true') {
      result--;
    }
    if (result <= -2) {
      result = -2;
    }
    localStorage.setItem(OfScore.SEVEN, result.toString());
  }

}
