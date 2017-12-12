import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';



import { PagesComponent } from './pages/pages.component';


const routes: Routes =[
      { path: 'app',  loadChildren: "app/pages/pages.module#PagesModule" },   
];

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }), 
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
