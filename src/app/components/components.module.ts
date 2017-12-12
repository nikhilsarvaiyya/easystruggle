import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	LeftmenuComponent,
  	RightcontentComponent
  ],
  exports : [
  	LeftmenuComponent,
  	RightcontentComponent
  ]
})
export class ComponentsModule { }
