import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css'],
})

export class ProductComponent {

  products$: Observable<Product[]>;

  constructor(private service: ProductService){
    this.products$ = this.service.findAll();
  }

  trackById(_: number, product: Product) {
  return product.id;
}

}
