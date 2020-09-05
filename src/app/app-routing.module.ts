import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { ConfigComponent } from './pages/config/config.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component'; 
import { ProductDetailComponent } from './pages/auth/product-detail/product-detail.component';
import { AuthGuardService } from './guards/auth-guard.service';

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
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'productDetail',
    component: ProductDetailComponent
  },
  { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) },
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
