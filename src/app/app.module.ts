import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { HtmlComponent } from './pages/html/html.component';
import { CssComponent } from './pages/css/css.component';
import { JqueryComponent } from './pages/jquery/jquery.component';
import { ComponentsComponent } from './components/components.component';

// Material Modules
import { MaterialModule } from './modules/material.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    DashboardComponent,
    JavascriptComponent,
    AngularComponent,
    HtmlComponent,
    CssComponent,
    JqueryComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    ComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
