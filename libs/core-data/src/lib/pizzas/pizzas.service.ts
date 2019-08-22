import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-snfwxrkzok.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  model = `pizzas`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map(res => res));
  }

  create(pizza) {
    return this.http.post(this.getUrl(), pizza);
  }

  update(pizza) {
    return this.http.patch(this.getUrlForId(pizza.id), pizza);
  }

  delete(pizzaId) {
    return this.http.delete(this.getUrlForId(pizzaId));
  }
}
