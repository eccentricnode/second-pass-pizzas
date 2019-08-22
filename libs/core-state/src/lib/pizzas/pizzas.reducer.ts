import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Pizza } from '@second-pass/core-data';;
import { PizzasAction, PizzasActionTypes } from './pizzas.actions';

export interface PizzasState extends EntityState<Pizza> {
  selectedPizzaId: string | null;
}

export const pizzasAdapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();
export const initialState: PizzasState = pizzasAdapter.getInitialState({
  selectedPizzaId: null,
});

export function pizzasReducer(state: PizzasState = initialState, action: PizzasAction) {
  switch (action.type) {
    case PizzasActionTypes.PIZZA_SELECTED: {
      return Object.assign({}, state, { selectedPizzaId: action.payload });
    }

    case PizzasActionTypes.PIZZAS_LOADED: {
      return pizzasAdapter.upsertMany(action.payload, state);
    }

    case PizzasActionTypes.PIZZA_ADDED: {
      return pizzasAdapter.addOne(action.payload, state);
    }

    case PizzasActionTypes.PIZZA_UPDATED: {
      return pizzasAdapter.upsertOne(action.payload, state);
    }

    case PizzasActionTypes.PIZZA_DELETED: {
      return pizzasAdapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedPizzaId = (state: PizzasState) => state.selectedPizzaId;

// get the selectors...

export const {
  selectIds: selectPizzasIds,
  selectEntities: selectPizzasEntities,
  selectAll: selectAllPizzas,
  selectTotal: selectPizzasTotal
} = pizzasAdapter.getSelectors();