import { Component, OnInit,OnDestroy } from '@angular/core';
import { PlatformDataConfigurationService } from '../service/app.platform.service';


import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})
export class ComponentaComponent implements OnInit,OnDestroy {
  subscription:Subscription;

  constructor(private _platformDataConfigurationService:PlatformDataConfigurationService) { }

  ngOnInit() {
    this.subscription= this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
     // if(message && message.length>0){
        
        console.log("From Component A")
        console.log(message);
      //}
    });
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
