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

  create(newProduct: Product): Observable<Product>{
    return this.http.post<Product>(this.url, newProduct);
  }

  update(productUpdate: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${productUpdate.id}`, productUpdate)
  }

  delete(id: number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
