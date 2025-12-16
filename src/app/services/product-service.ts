import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private url: string = 'http://localhost:8080/products'

  constructor(private http: HttpClient){}

  findAll(): Observable<Product[]>{
    return this.http.get<any>(this.url).pipe(
      map( response => response._embedded.products as Product[]),
    );
  }
}
