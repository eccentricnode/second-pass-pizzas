import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './pizzas/pizzas.reducer';

export interface AppState {
    pizzas: fromPizzas.PizzasState;
}

export const reducers: ActionReducerMap<AppState> = {
    pizzas: fromPizzas.pizzasReducer,
}