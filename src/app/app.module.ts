import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiLoaderModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './components/basket/basket.component';
import { BasketItemComponent } from './components/basket-item/basket-item.component';
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiIslandModule,
  TuiPushModule,
} from '@taiga-ui/kit';
import { CountriesComponent } from './components/countries/countries.component';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductComponent,
    BasketComponent,
    BasketItemComponent,
    CountriesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiInputModule,
    TuiPushModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiLoaderModule,
    TuiLetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
