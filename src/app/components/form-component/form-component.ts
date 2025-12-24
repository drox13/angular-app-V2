import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  @Input() product: Product = new Product();

  @Output() newProductEvent = new EventEmitter();

  onSubmit(): void {
    this.newProductEvent.emit(this.product);
      console.log(this.product)
  }
}
