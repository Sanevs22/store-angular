import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less'],
})
export class BasketComponent implements OnInit {
  @Output()
  changeMode = new EventEmitter<boolean>();

  products: BasketItem[] = [];
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.products = this.basketService.basket;
  }

  toShop(): void {
    this.changeMode.emit(true);
  }
}
