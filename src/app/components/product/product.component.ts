import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent {
  @Input()
  product!: Product;

  @Output()
  addProductInBasket = new EventEmitter<BasketItem>();

  inBasket = false;
  form = new FormGroup({
    positions: new FormControl(1, [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
      Validators.min(1),
    ]),
  });

  submit(): void {
    this.addProductInBasket.emit({
      product: this.product,
      positions: Number(this.form.controls.positions.value),
    });
    this.form.disable();
    this.inBasket = true;
  }
}
