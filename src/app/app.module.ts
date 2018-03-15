import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApppMaterialModule } from './material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    // BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    ApppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
