import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form-component',
  imports: [FormsModule, NgIf],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  @Input() product: Product = new Product();

  @Output() newProductEvent = new EventEmitter();

  onSubmit(productForm: NgForm): void {
    if(productForm.valid){
      this.newProductEvent.emit(this.product);
        console.log(this.product)
    }
    productForm.reset();
    productForm.resetForm();
  }

}
