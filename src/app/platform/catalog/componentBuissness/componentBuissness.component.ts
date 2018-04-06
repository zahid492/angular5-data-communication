import { Component, OnInit, OnDestroy} from '@angular/core';

import {trigger, transition, query, animate, style} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-component-buissness',
  templateUrl: './componentBuissness.component.html',
  styleUrls: ['./componentBuissness.component.css'],
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

export class ComponentBuissnessComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
