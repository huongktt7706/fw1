import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../service-products/service-products';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-products.html',
})
export class AddProduct {
  loading = false;

  productForm: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
    });
  }

  submitProduct() {
    if (this.productForm.invalid) return;

    this.loading = true;

    this.productService.create(this.productForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.productForm.reset();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}