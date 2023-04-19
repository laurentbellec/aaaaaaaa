import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { GridsterWidgetComponent } from './gridster-widget.component';

@NgModule({
  declarations: [
    GridsterWidgetComponent,
  ],
  imports: [
    CommonModule,
    GridsterModule,
  ]
})
export class GridsterWidgetModule { }
