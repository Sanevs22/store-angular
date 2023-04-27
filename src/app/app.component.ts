import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'store-angular';
  isShop = true;
  changeMode() {
    this.isShop = !this.isShop;
  }
}
