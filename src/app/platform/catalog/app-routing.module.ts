import {Routes, RouterModule} from '@angular/router';


const routes = [
    {
      path: 'componenta',
      loadChildren: 'app/platform/catalog/componenta/componenta.module#ComponentaModule'
    },
    {
      path: 'componentb',
      loadChildren: 'app/platform/catalog/componentb/componentb.module#ComponentbModule'
    },
    {
      path: 'componentc',
      loadChildren: 'app/platform/catalog/componentc/componentc.module#ComponentcModule'
    },
    {
       path: 'componentBuissness',
      loadChildren: 'app/buissness/catalog/componentbuissness/componentbuissness.module#ComponentbuissnessModule'
    }

  ];

export const globalRouting = RouterModule.forRoot(routes);
