import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { Pizza } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {
  selectedPizza: Pizza;

  @Input() group: FormGroup;
  @Input() set pizza(value: Pizza) {
    this.selectedPizza = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      calories: value.calories,
      mainTopping: value.mainTopping,
      secondaryTopping: value.secondaryTopping
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if(this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
