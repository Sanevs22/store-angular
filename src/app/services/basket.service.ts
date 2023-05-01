import { Injectable } from '@angular/core';
import { BasketItem } from '../interfaces/basket-item';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  basket: BasketItem[] = [];

  delete(i: number): void {
    this.basket.splice(i, 1);
  }
}
