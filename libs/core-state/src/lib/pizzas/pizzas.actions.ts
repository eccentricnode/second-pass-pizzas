import { Action } from '@ngrx/store';

import { Pizza } from '@second-pass/core-data';

export enum PizzasActionTypes {
  PIZZAS_ACTION  = '[PIZZAS] Pizzas Action',
  PIZZA_SELECTED = '[PIZZAS] Pizza Selected',
  LOAD_PIZZAS    = '[PIZZAS] Load Pizzas',
  PIZZAS_LOADED  = '[PIZZAS] Pizzas Loaded',
  ADD_PIZZA      = '[PIZZAS] Add Pizza',
  PIZZA_ADDED    = '[PIZZAS] Pizzas Added',
  UPDATE_PIZZA   = '[PIZZAS] Update Pizza',
  PIZZA_UPDATED  = '[PIZZAS] Pizza Updated',
  DELETE_PIZZA   = '[PIZZAS] Delete Pizza',
  PIZZA_DELETED  = '[PIZZAS] Pizza Deleted',
}

export class Pizzas implements Action {
  readonly type = PizzasActionTypes.PIZZAS_ACTION;
}

export class PizzaSelected implements Action {
  readonly type = PizzasActionTypes.PIZZA_SELECTED;
  constructor(public payload) { }
}
export class LoadPizzas implements Action {
  readonly type = PizzasActionTypes.LOAD_PIZZAS;
  constructor() {}
}

export class PizzasLoaded implements Action {
  readonly type = PizzasActionTypes.PIZZAS_LOADED;
  constructor(public payload: Pizza[]) { }
}

export class AddPizza implements Action {
  readonly type = PizzasActionTypes.ADD_PIZZA;
  constructor(public payload: Pizza) { }
}

export class PizzaAdded implements Action {
  readonly type = PizzasActionTypes.PIZZA_ADDED;
  constructor(public payload: Pizza) { }
}

export class UpdatePizza implements Action {
  readonly type = PizzasActionTypes.UPDATE_PIZZA;
  constructor(public payload: Pizza) { }
}

export class PizzaUpdated implements Action {
  readonly type = PizzasActionTypes.PIZZA_UPDATED;
  constructor(public payload: Pizza) { }
}

export class DeletePizza implements Action {
  readonly type = PizzasActionTypes.DELETE_PIZZA;
  constructor(public payload: Pizza ) { }
}

export class PizzaDeleted implements Action {
  readonly type = PizzasActionTypes.PIZZA_DELETED;
  constructor(public payload: Pizza) { }
}

export type PizzasAction = Pizzas 
  | PizzaSelected
  | LoadPizzas
  | PizzasLoaded
  | AddPizza
  | PizzaAdded
  | UpdatePizza
  | PizzaUpdated
  | DeletePizza
  | PizzaDeleted
;