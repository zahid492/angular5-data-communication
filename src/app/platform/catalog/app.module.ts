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
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [{
  path: 'componenta',
  loadChildren: 'app/platform/catalog/componenta/componenta.module#ComponentaModule'
},
{
  path: 'componentb',
  loadChildren: 'app/platform/catalog/componentb/componentb.module#ComponentbModule'
},
{
  path: 'componentc',
  loadChildren: 'app/platform/catalog/componentc/componentc.module#ComponentcModule'
},
{
  path: 'componentBuissness',
 loadChildren: 'app/buissness/catalog/componentbuissness/componentbuissness.module#ComponentbuissnessModule'
}];


@NgModule({
  declarations: [
    AppComponent,
    DcdDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    CommonModule
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
  constructor(private router: Router, private _dynamiccomponentService: DynamiccomponentService) {
   /* routes.push({
         path: 'componentBuissness',
        loadChildren: 'app/buissness/catalog/componentbuissness/componentbuissness.module#ComponentbuissnessModule'
      }
    );*/

    const loadedRoute: Routes = _dynamiccomponentService.getRouteInfo();
    // routes.push(loadedRoute);
    console.log(routes);
    // router.resetConfig(routes);
  }
 }
