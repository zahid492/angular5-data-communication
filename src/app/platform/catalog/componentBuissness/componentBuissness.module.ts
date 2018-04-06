import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentBuissnessComponent } from './componentBuissness.component';

const homeRoutes: Routes = [
  { path: '',  component: ComponentBuissnessComponent }
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
    ComponentBuissnessComponent
  ]
})
export class ComponentBuissnessModule {}