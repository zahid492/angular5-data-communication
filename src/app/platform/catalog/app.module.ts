import { DynamiccomponentService } from './service/dynamiccomponent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './componentc/componentc.component';
import { DcdDirective } from './dcd.directive';

import { PlatformDataConfigurationService } from './service/app.platform.service';

import {ComponentBuissnessComponent} from '../../buissness/catalog/componentBuissness/componentBuissness.component'


@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComponentbComponent,
    ComponentcComponent,
    DcdDirective,
    ComponentBuissnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [
    ComponentaComponent,
    ComponentbComponent,
    ComponentcComponent
  ],
  exports:[
    AppComponent
  ],
  providers: [DynamiccomponentService,PlatformDataConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
