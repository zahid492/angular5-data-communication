
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CatalogComponent} from './catalog.component';
import {AppModule} from '../../platform/catalog/app.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {ComponentbuissnessModule} from './componentbuissness/componentbuissness.module';
import {CatalogBuissnessService} from '../catalog/service/catalogBuissnessService.service';
import {ComponentbuissnessComponent} from './componentbuissness/componentbuissness.component';
import { HttpClientModule } from '@angular/common/http';

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
    MatTabsModule,
    HttpClientModule,
    ComponentbuissnessModule
  ],
  entryComponents: [
    CatalogComponent
  ],
  exports: [
    CatalogComponent
  ],
  providers: [        {
    provide: 'ICatalog',
    useClass: CatalogBuissnessService
    }],
  bootstrap: [CatalogComponent]
})
export class CatalogModule { }
