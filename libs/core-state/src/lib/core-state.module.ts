import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { PizzasEffects } from './pizzas/pizzas.effects';
import { PizzasFacade } from './pizzas/pizzas.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PizzasEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [PizzasFacade]
})
export class CoreStateModule {}
