import { Component, OnInit, OnDestroy,Inject } from '@angular/core';
import { PlatformDataConfigurationService } from '../service/app.platform.service';
import {trigger, transition, query, animate, style} from '@angular/animations';
import { ICatalog} from '../contracts/catalog-actions.interface';

import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css'],
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
export class ComponentaComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  message: any;
  constructor(private _platformDataConfigurationService: PlatformDataConfigurationService,
    @Inject('ICatalog') private catalog) { }

  ngOnInit() {
    this.subscription = this._platformDataConfigurationService.currentConfigurationSource.subscribe(message =>{
     // if(message && message.length>0){
        console.log('From Component A');
        console.log(message);
      // }
    });


    this.catalog.getCatalogs().then((response) => {
       this.message = response;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}


}
