import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import { emptyPizza } from '@second-pass/core-data';

// Lookup the 'Pizzas' feature state managed by NgRx
export const selectPizzasState = createFeatureSelector<fromPizzas.PizzasState>('pizzas');

export const selectPizzasIds = createSelector(
  selectPizzasState,
  fromPizzas.selectPizzasIds
);

export const selectPizzasEntities = createSelector(
  selectPizzasState,
  fromPizzas.selectPizzasEntities
);

export const selectAllPizzas = createSelector(
  selectPizzasState,
  fromPizzas.selectAllPizzas
);

export const selectCurrentPizzaId = createSelector(
  selectPizzasState,
  fromPizzas.getSelectedPizzaId
);

export const selectCurrentPizza = createSelector(
  selectPizzasEntities,
  selectCurrentPizzaId,
  (pizzasEntities, pizzaId) => {
    return pizzaId ? pizzasEntities[pizzaId] : Object.assign({}, emptyPizza);
  }
);