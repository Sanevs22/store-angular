import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { Product } from 'src/app/interfaces/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less'],
})
export class ShopComponent implements OnInit {
  @Output()
  changeMode = new EventEmitter<boolean>();

  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  addProductInBasket(basketItem: BasketItem) {
    this.basketService.basket.push(basketItem);
    console.log(this.basketService.basket);
  }

  toBasket(): void {
    this.changeMode.emit(false);
  }
}
