import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SummaryComponent } from '../summary/summary.component';
import { OrdersComponent } from '../orders/orders.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: SummaryComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'orders', component: OrdersComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    DashboardComponent,
    SummaryComponent,
    OrdersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
