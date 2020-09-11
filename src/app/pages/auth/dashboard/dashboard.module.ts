import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SummaryComponent } from '../summary/summary.component';

@NgModule({
  declarations: [DashboardComponent, ProductDetailComponent, SummaryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
