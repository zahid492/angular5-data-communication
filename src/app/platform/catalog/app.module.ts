import { DynamiccomponentService } from './service/dynamiccomponent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { globalRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcdDirective } from './dcd.directive';
import {MatTabsModule} from '@angular/material/tabs';
import { PlatformDataConfigurationService } from './service/app.platform.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DcdDirective
  ],
  imports: [
    BrowserModule,
    globalRouting,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
  ],
  exports: [
    AppComponent,
    CommonModule
  ],
  providers: [DynamiccomponentService, PlatformDataConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
