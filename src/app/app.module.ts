import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './pages/initial/initial.component';
import { ConfigComponent } from './pages/config/config.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ConfigComponent,
    CardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
