import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent {
  @Input() pizzas: Pizza[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(pizza: Pizza) {
    this.selected.emit(pizza);
  }

  remove(pizza: string) {
    this.deleted.emit(pizza);
  }
}
