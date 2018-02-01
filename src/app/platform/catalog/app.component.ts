import { DynamiccomponentService } from './service/dynamiccomponent.service';
import { DcdDirective } from './dcd.directive';
import { Component, NgModule, ViewChild,
  ComponentFactoryResolver,OnInit } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute,Router } from '@angular/router';
import { PlatformDataConfigurationService } from "./service/app.platform.service";


import {ComponentBuissnessComponent} from '../../buissness/catalog/componentBuissness/componentBuissness.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(DcdDirective) componentHost: DcdDirective;

  defaultConfiguration:any={
    parentComponent:"",
    tab:[
      {
        title:'Tab AAAA',
        component:'componenta'
      },
      {
       title:'Tab BBBB',
       component:'componentb'
     },
     {
       title:'Tab CCCC',
       component:'componentc'
     }
    ]
 };
  selectComponentName: string;
  constructor(
    private dynamicComponentService: DynamiccomponentService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private platformDataConfigurationService:PlatformDataConfigurationService,
  ) { }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName));

    const viewContainerRef = this.componentHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory)

    const queryParams: any = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    // Do sth about the params
    queryParams['tab'] = componentName;
  
    this.router.navigate(['.'], { queryParams: queryParams });
    console.log(this.defaultConfiguration)
    this. platformDataConfigurationService.currentConfigurationSourceChange(this.defaultConfiguration)

  }

 ngOnInit(){
    
  }
}
