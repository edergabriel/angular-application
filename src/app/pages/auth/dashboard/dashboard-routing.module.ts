import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [ 
      { path: 'product-detail', component: ProductDetailComponent } 
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
