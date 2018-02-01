import { Component, OnInit,OnDestroy } from '@angular/core';

import { PlatformDataConfigurationService } from '../service/app.platform.service';


import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-componentc',
  templateUrl: './componentc.component.html',
  styleUrls: ['./componentc.component.css']
})
export class ComponentcComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  constructor(private _platformDataConfigurationService:PlatformDataConfigurationService) { }

  ngOnInit() {
    this.subscription=this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
      //debugger;
        console.log("From Component C")
        console.log(message);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
