
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service-products/service-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: any[] = [];

  loading = false;
  error = '';
  deletingId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.error = '';

    this.productService.getAll().subscribe({
      next: (data:any) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Lỗi load dữ liệu';
      },
    });
  }

  deleteProduct(id: number) {
    if (!confirm('Xóa?')) return;

    this.deletingId = id;

    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.deletingId = null;
      },
    });
  }
}