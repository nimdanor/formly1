import { NgModule } from '@angular/core';

import { WorkplaceRoutingModule } from './workplace-routing.module';

import { WorkplaceComponent } from './workplace.component';

@NgModule({
  imports: [WorkplaceRoutingModule],
  declarations: [WorkplaceComponent],
  exports: [WorkplaceComponent],
})
export class WorkplaceModule {}
