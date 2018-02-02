import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentaComponent } from './componenta.component';

const homeRoutes: Routes = [
  { path: '',  component: ComponentaComponent }
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
    ComponentaComponent
  ]
})
export class ComponentaModule {}