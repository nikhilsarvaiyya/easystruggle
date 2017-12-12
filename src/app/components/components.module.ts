import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';
// Material Modules
import { MaterialModule } from './../modules/material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
  	LeftmenuComponent,
  	RightcontentComponent
  ],
  exports : [
  	LeftmenuComponent,
  	RightcontentComponent,
    MaterialModule
  ]
})
export class ComponentsModule { }
