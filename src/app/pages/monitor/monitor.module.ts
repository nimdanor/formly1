import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor-routing.module';

import { MonitorComponent } from './monitor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzTabDirective, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioComponent } from 'ng-zorro-antd/radio';

@NgModule({
  imports: [
    MonitorRoutingModule,
    NzDatePickerModule,
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
    NzTabsModule,
    NzBreadCrumbModule,
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    NzFormModule,
    FormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  declarations: [MonitorComponent],
  exports: [MonitorComponent],
})
export class MonitorModule {}
