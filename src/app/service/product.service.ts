import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../shared/data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public data: Data[] = [];
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Data[]> {
    return this.http
      .get<Data[]>('./assets/DATA.json')
      .pipe(tap((data) => (this.data = data)));
  }
}
