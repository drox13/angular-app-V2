import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
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

export class ProductComponent implements OnInit{

  products = signal<Product[]>([]);

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(products =>{
      this.products.set(products)
    })
  }

  trackById(_: number, product: Product) {
  return product.id;
}

}
