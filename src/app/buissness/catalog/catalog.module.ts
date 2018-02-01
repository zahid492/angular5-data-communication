
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CatalogComponent} from './catalog.component'
import {AppModule} from '../../platform/catalog/app.module'


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppModule
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [CatalogComponent]
})
export class CatalogModule { }
