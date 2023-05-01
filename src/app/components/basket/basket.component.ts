import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { Currenscy } from 'src/app/interfaces/currency';
import { BasketService } from 'src/app/services/basket.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less'],
})
export class BasketComponent implements OnInit {
  @Output()
  changeMode = new EventEmitter<boolean>();

  products: BasketItem[] = [];
  currencySymbol = 'USD';
  convertSum = 1;
  open = false;
  readonly form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    address: new FormControl(null, [Validators.required]),
  });

  constructor(
    private currencyService: CurrencyService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.products = this.basketService.basket;
  }

  toShop(): void {
    this.changeMode.emit(true);
  }

  sum() {
    let res = this.products.reduce(
      (sum, cur) => sum + cur.positions * cur.product.price,
      0
    );
    return res;
  }

  toggle(open: boolean): void {
    this.open = open;
  }
  conversion(ev: any, sum: number) {
    let сurrencyTo = Object.keys(ev.сountry.сountry.currencies)[0];
    this.currencySymbol = ev.сountry.сountry.currencies[сurrencyTo].symbol;
    if (sum !== 0) {
      this.currencyService
        .сurrency(сurrencyTo, sum)
        .subscribe((products: Currenscy) => {
          this.convertSum = Number(products?.info.quote);
        });
    }
  }

  summ() {
    return this.convertSum;
  }
}
