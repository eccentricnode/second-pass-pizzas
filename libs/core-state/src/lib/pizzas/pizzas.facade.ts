import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllPizzas, selectCurrentPizza } from './pizzas.selectors';
import { Pizza } from '@second-pass/core-data';
import { PizzasState } from './pizzas.reducer';
import * as PizzasActions from './pizzas.actions';
import { PizzasActionTypes } from './pizzas.actions';

@Injectable()
export class PizzasFacade {
  allPizzas$ = this.store.pipe(select(selectAllPizzas));
  selectedPizzas$ = this.store.pipe(select(selectCurrentPizza));

  mutations$ = this.actions$
    .pipe(
      filter(action => 
        action.type === PizzasActionTypes.ADD_PIZZA
        || action.type === PizzasActionTypes.UPDATE_PIZZA
        || action.type === PizzasActionTypes.DELETE_PIZZA
      )
    );

  constructor(private store: Store<PizzasState>, private actions$: ActionsSubject) {}

  selectPizza(pizzaId: string) {
    this.store.dispatch(new PizzasActions.PizzaSelected(pizzaId));
  }

  loadPizzas() {
    this.store.dispatch(new PizzasActions.LoadPizzas());
  }

  createPizza(pizza: Pizza) {
    this.store.dispatch(new PizzasActions.AddPizza(pizza));
  }

  updatePizza(pizza: Pizza) {
    this.store.dispatch(new PizzasActions.UpdatePizza(pizza));
  }

  deletePizza(pizza: Pizza) {
    this.store.dispatch(new PizzasActions.DeletePizza(pizza));
  }
}
