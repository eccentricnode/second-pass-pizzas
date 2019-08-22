import { Injectable } from '@angular/core';
import { createEffect, Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { PizzasState } from './pizzas.reducer';
import { 
  PizzasActionTypes,
  LoadPizzas,
  PizzasLoaded,
  AddPizza,
  PizzaAdded,
  UpdatePizza,
  PizzaUpdated,
  DeletePizza,
} from './pizzas.actions';
import { PizzasService, Pizza } from '@second-pass/core-data';

@Injectable()
export class PizzasEffects {
  @Effect() loadPizzas$ = this.dataPersistence.fetch(PizzasActionTypes.LOAD_PIZZAS, {
    run: (action: LoadPizzas, state: PizzasState) => {
      this.pizzasService.all().pipe(map((res: Pizza[]) => new PizzasLoaded(res)));
    },

    onError: (action: LoadPizzas, error) => {
      console.error('Error', error);
    }
  });

  @Effect() addPizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.ADD_PIZZA, {
    run: (action: AddPizza, state: PizzasState) => {
      this.pizzasService.create(action.payload).pipe(map((res: Pizza) => new PizzaAdded(res)));
    },

    onError: (action: AddPizza, error) => {
      console.error('Error', error);
    }
  });

  @Effect() updatePizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.UPDATE_PIZZA, {
    run: (action: UpdatePizza, state: PizzasState) => {
      this.pizzasService.update(action.payload).pipe(map((res: Pizza) => new PizzaUpdated(res)));
    },

    onError: (action: UpdatePizza, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deletePizza$ = this.dataPersistence.pessimisticUpdate(PizzasActionTypes.UPDATE_PIZZA, {
    run: (action: DeletePizza, state: PizzasState) => {
      this.pizzasService.delete(action.payload).pipe(map((res: Pizza) => new PizzaUpdated(res)));
    },

    onError: (action: DeletePizza, error) => {
      console.error('Error', error);
    }
  })
  
  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzasState>,
    private pizzasService: PizzasService
  ) {}
}
