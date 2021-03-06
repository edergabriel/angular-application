import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { ConfigComponent } from './pages/config/config.component';
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
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/auth/dashboard/dashboard.module').then(m => m.DashboardModule) 
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
