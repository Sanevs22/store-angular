import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  Subject,
  SubscriptionLike,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { BasketItem } from 'src/app/interfaces/basket-item';
import { Currenscy } from 'src/app/interfaces/currency';
import { BasketService } from 'src/app/services/basket.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less'],
})
export class BasketComponent {
  @Output()
  changeMode = new EventEmitter<boolean>();

  products: BasketItem[] = this.basketService.basket;
  currencySymbol = 'USD';
  convertSum = 1;
  open = false;

  readonly convert$ = new Subject<void>();

  readonly form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    address: new FormControl(null, [Validators.required]),
  });

  constructor(
    private currencyService: CurrencyService,
    private basketService: BasketService
  ) {}

  toShop(): void {
    this.changeMode.emit(true);
  }

  sum() {
    return this.products.reduce(
      (sum, cur) => sum + cur.positions * cur.product.price,
      0
    );
  }

  toggle(open: boolean): void {
    this.open = open;
  }

  louder = false;
  readonly search$ = new Subject<string>();

  readonly items$: Observable<any | null> = this.search$.pipe(
    tap(() => {
      this.louder = true;
    }),
    switchMap((сurrencyTo) =>
      this.currencyService.сurrency(сurrencyTo, this.sum())
    ),
    map((p) => p.info.quote),
    tap(() => {
      this.louder = false;
    })
  );

  conversion(ev: any, sum: number) {
    let сurrencyTo = Object.keys(ev.сountry.сountry.currencies)[0];
    this.currencySymbol = ev.сountry.сountry.currencies[сurrencyTo].symbol;
    this.search$.next(сurrencyTo);
  }
}
