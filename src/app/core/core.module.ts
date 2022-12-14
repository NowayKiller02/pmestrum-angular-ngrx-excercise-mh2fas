import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers } from './reducers';


@NgModule({
  imports: [

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: environment.production,
        strictActionImmutability: environment.production
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ]
})
export class CoreModule { }
