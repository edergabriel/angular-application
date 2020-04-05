import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from 'src/app/components/initial-page/initial-page.component';
import { PageAComponent } from 'src/app/components/initial-page/page-a/page-a.component';
import { PageBComponent } from 'src/app/components/initial-page/page-b/page-b.component';


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
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
