import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { UmfrageComponent } from './pages/umfrage/umfrage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UmfrageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
