import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { getISOWeek, getMonth, getYear } from 'date-fns';
import { NzTabsModule, NzTabType } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-Monitor',
  templateUrl: './Monitor.component.html',
  styleUrls: ['./Monitor.component.scss'],
})
export class MonitorComponent implements OnInit {
  tab: number = 1;
  nu: number = 1;
  form = new FormGroup({});
  form2 = new FormGroup({});
  model: any = {};
  model2 = {};
  fields2: FormlyFieldConfig[] = [];
  fields: FormlyFieldConfig[] = [];

  onSubmit() {
    // if (this.form.valid) {
    //   alert(JSON.stringify(this.model, null, 2));
    // }
    this.nu += 1;
    let x: MyField = {
      id: 'MyfieldId' + this.nu,
      key: this.model['key'],
      type: this.model['type'],
      templateOptions: {
        label: this.model['label'],
        placeholder: this.model['placeholder'],
        required: this.model['required'],
      },
    };

    // verifier que la clef n'est pas déjà utilisée

    this.fields2.push(x);
  }
  onSubmit2() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model2, null, 2));
    }
  }

  date: Date;
  constructor() {
    this.date = new Date();
  }

  onChange(result: Event): void {
    this.date = result as unknown as Date;
    console.log('onChange: ', result);
  }

  getWeek(result: any): void {
    console.log('week: ', result.map(getISOWeek));
  }

  getMonth(result: any): void {
    console.log('month: ', result.map(getMonth));
  }
  getYear(result: any): void {
    console.log('Annee: ', result.map(getYear));
  }

  ngOnInit() {}
}

interface MyField {
  id: string;
  key: string;
  type: string;
  templateOptions: any;
}
