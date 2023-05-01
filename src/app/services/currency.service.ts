import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currenscy } from '../interfaces/currency';

let host = 'https://api.apilayer.com/currency_data/convert';
// let host =
// 'https://api.apilayer.com/currency_data/convert?to=RUB&from=USD&amount=12';
let headers = new HttpHeaders({ apikey: 'nY7MfdRQWYBRHRwAIgn4bEDfvaraHLLk' });

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  сurrency(curr: string, sum: number): Observable<Currenscy> {
    return this.httpClient.get<Currenscy>(
      `${host}?to=${curr}&from=USD&amount=${sum}`,
      { headers: headers }
    );
  }
}
