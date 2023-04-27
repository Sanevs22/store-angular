import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

const host = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(host);
  }
}
