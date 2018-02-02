import { Component, OnInit,OnDestroy} from '@angular/core';

import { PlatformDataConfigurationService } from '../service/app.platform.service';
import {trigger, transition, query, animate, style} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('* => *', [
        query(':enter', style({ height: 0, overflow: 'hidden' }), { optional: true }),
        query(':leave', [
          animate('500ms ease', style({ opacity: 0, transform: 'translateY(100px)' }))
        ], { optional: true })
      ])
    ])
  ]
})

export class ComponentbComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  constructor(private _platformDataConfigurationService:PlatformDataConfigurationService) { }

  ngOnInit() {
    this.subscription = this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
     //   console.log("From Component B")
        console.log(message);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
