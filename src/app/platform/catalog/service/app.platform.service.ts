import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlatformDataConfigurationService {
  private components = {
  }
  constructor() { }
  defaultConfiguration:any={
    parentComponent:"",
    tab:[
      {
        title:'Tab XXXX',
        component:'componenta'
      },
      {
       title:'Tab YYYY',
       component:'componentb'
     },
     {
       title:'Tab ZZZZ',
       component:'componentc'
     }
    ]
 };
  configurationSource: BehaviorSubject<any[]> = new BehaviorSubject([]);
  currentConfigurationSource = this.configurationSource.asObservable();

  currentConfigurationSourceChange(configuration: any) {
    this.configurationSource.next(configuration)
  }
}
