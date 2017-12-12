import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Material Modules
import { MaterialModule } from './../modules/material.module';
import { ComponentsModule } from './../components/components.module';

import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';

import { PageRoutingModule } from './pages.routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ComponentsModule,
    PageRoutingModule
  ],
  declarations: [
    AngularComponent,
    JavascriptComponent
  ],
  exports : [
    MaterialModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
