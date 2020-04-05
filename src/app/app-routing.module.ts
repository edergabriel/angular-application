import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { PageAComponent } from './components/initial-page/page-a/page-a.component';
import { PageBComponent } from './components/initial-page/page-b/page-b.component';
import { ConfigPageComponent } from './components/config-page/config-page.component';


const routes: Routes = [{
  path: 'initialPage',
  component: InitialPageComponent,
  children: [
    {
      path: "",
      redirectTo: "initialPage",
      pathMatch: "full"
    },
    {
      path: "pageA",
      component: PageAComponent
    },
    {
      path: "pageB",
      component: PageBComponent
    },
  ]},
  {
    path: 'configPage',
    component: ConfigPageComponent
  },
  {
    path: '',
    redirectTo: 'initialPage',
    pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
