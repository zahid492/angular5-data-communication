import { Component, NgModule, ViewChild,
  ComponentFactoryResolver,OnInit } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute,Router } from '@angular/router';
import { PlatformDataConfigurationService } from '../../platform/catalog/service/app.platform.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent  implements OnInit {

  configuration:any={
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

  constructor(private _router:Router,private _platformDataConfigurationService:PlatformDataConfigurationService) { }

  displayComponent(componentName: string) {

  }

  processData(obj:any){
    return obj.asObservable();
  }
  
  ngOnInit() {
    this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
      if(message && message.length>0){
        this.configuration = message

        this.processData(message);
        console.log(this.configuration);

      }
    });
  }

}
