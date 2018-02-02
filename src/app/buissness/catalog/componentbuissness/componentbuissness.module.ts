import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentbuissnessComponent } from './componentBuissness.component';

const homeRoutes: Routes = [
  { path: '',  component: ComponentbuissnessComponent }
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
    ComponentbuissnessComponent
  ]
})
export class ComponentbuissnessModule {}