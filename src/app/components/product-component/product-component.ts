import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { FormComponent } from '../form-component/form-component';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css'],
})

export class ProductComponent implements OnInit{

  products = signal<Product[]>([]);
  productSelected: Product = new Product();

  constructor(private service: ProductService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(products =>{
      this.products.set(products)
    })
  }

  trackById(_: number, product: Product) {
  return product.id;
  }

  onUpdateProduct(productRow: Product) {
    this.productSelected = {...productRow};
  }

  addproduct(product: Product) {
    if(product.id > 0 ){ // Editar
      this.service.update(product).subscribe(productUpdate =>{
        this.products.update(products =>
          products.map(p => p.id === productUpdate.id?
            { ... productUpdate }: p
          )
        )
      })
    }else{ // Crear
      this.service.create(product).subscribe(producNew =>{
        this.products.update(
          products => [... products, {...producNew}
        ] )
      })
    }
    this.productSelected = new Product(); // limpia el formulario
  }
}
