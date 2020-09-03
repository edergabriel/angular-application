import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent,
    children: [ 
      { path: 'search', component: SearchComponent } 
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
