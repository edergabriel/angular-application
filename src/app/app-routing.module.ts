import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { ConfigComponent } from './pages/config/config.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component'; 
import { ProductDetailComponent } from './pages/auth/product-detail/product-detail.component';

const routes: Routes = [
  {
  path: '',
  component: InitialComponent
  },

  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'productDetail',
    component: ProductDetailComponent
  },
  /*{
    path: '',
    redirectTo: 'initialPage',
    pathMatch: "full"
}*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
