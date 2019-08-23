import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Pizza } from '@second-pass/core-data';
import { PizzasFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  form: FormGroup;
  pizzas$: Observable<Pizza[]> = this.pizzasFacade.allPizzas$;
  selectedPizza$: Observable<Pizza> = this.pizzasFacade.selectedPizzas$

  constructor(
    private pizzasFacade: PizzasFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pizzasFacade.loadPizzas();
    this.initForm();
    this.pizzasFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectPizza(pizza) {
    this.pizzasFacade.selectPizza(pizza.id);
  }

  savePizza(pizza: Pizza) {
    pizza.id ? this.pizzasFacade.updatePizza(pizza) : this.pizzasFacade.createPizza(pizza);
  }

  removePizza(pizza: Pizza) {
    this.pizzasFacade.deletePizza(pizza);
  }

  reset() {
    this.form.reset();
    this.selectPizza({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      calories: [null, Validators.compose([Validators.required])],
      mainTopping: ['', Validators.compose([Validators.required])],
      secondaryTopping: ['', Validators.compose([Validators.required])],
    });
  }
}
