import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

let host = 'https://restcountries.com/v3.1/translation';

@Injectable()
export class RequestService {
  constructor(private httpClient: HttpClient) {}

  search(searchText: string): Observable<any[]> {
    if (searchText === '') {
      return new Observable();
    }
    return this.httpClient.get<any[]>(`${host}/${searchText}`);
  }
}
