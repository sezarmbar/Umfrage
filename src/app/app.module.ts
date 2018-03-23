import 'hammerjs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApppMaterialModule } from './material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { UmfrageComponent } from './pages/umfrage/umfrage.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UmfrageComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    ApppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
