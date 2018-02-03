import { Component, OnInit, OnDestroy} from '@angular/core';

import {trigger, transition, query, animate, style} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-buissness',
  templateUrl: './componentbuissness.component.html',
  styleUrls: ['./componentbuissness.component.css'],
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

export class ComponentbuissnessComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() { }
  name= 'hello';
  ngOnInit() {
     this.name = 'hello';
  }
  ngOnDestroy() {
}

}
