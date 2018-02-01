import { Component, OnInit,OnDestroy} from '@angular/core';

import { PlatformDataConfigurationService } from '../service/app.platform.service';

import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css']
})
export class ComponentbComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  constructor(private _platformDataConfigurationService:PlatformDataConfigurationService) { }

  ngOnInit() {
    this.subscription=this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
        console.log("From Component B")
        console.log(message);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
