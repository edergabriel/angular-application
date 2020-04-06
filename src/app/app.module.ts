import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { PageAComponent } from './components/initial-page/page-a/page-a.component';
import { PageBComponent } from './components/initial-page/page-b/page-b.component';
import { ConfigPageComponent } from './components/config-page/config-page.component';
import { InitialComponent } from './pages/initial/initial.component';
import { ConfigComponent } from './pages/config/config.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    PageAComponent,
    PageBComponent,
    ConfigPageComponent,
    InitialComponent,
    ConfigComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
