import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentcComponent } from './componentc.component';

const homeRoutes: Routes = [
  { path: '',  component: ComponentcComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ComponentcComponent
  ]
})
export class ComponentcModule {}