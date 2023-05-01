import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.less'],
})
export class BasketItemComponent {
  @Input()
  product!: BasketItem;
  @Input()
  index!: number;

  constructor(private basketService: BasketService) {}

  delete() {
    this.basketService.delete(this.index);
  }
}
