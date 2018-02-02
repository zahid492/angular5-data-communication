import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentbComponent } from './componentb.component';

const homeRoutes: Routes = [
  { path: '',  component: ComponentbComponent }
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
    ComponentbComponent
  ]
})
export class ComponentbModule {}