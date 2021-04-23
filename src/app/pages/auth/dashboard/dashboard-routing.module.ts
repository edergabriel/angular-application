import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SummaryComponent } from '../summary/summary.component';
import { OrdersComponent } from '../orders/orders.component';


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
    OrdersComponent,
    ProductDetailComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
