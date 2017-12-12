import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JqueryComponent } from './jquery/jquery.component';

const routes: Routes =[
  { path: '',  component: PagesComponent,
      children: [
      {
          path: '',
          
          children: [
            { path: 'javascript',  component: JavascriptComponent, pathMatch: 'full',},
            {path: '**', redirectTo: 'notfound'}
        ]
      }
    ]
  }
]; 

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  providers: [

  ],
  declarations : [
  	PagesComponent
  ],
  exports: [
      RouterModule
  ],
})
export class PageRoutingModule { }

