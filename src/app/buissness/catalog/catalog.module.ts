
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CatalogComponent} from './catalog.component'
import {AppModule} from '../../platform/catalog/app.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule
  ],
  entryComponents: [
  ],
  exports: [
    CatalogComponent
  ],
  providers: [],
  bootstrap: [CatalogComponent]
})
export class CatalogModule { }
