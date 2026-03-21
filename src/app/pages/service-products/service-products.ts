import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = JSON.parse(localStorage.getItem('products') || '[]');

  save() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getAll() {
    return {
      subscribe: ({ next }: any) => next(this.products),
    };
  }

  create(data: any) {
    return {
      subscribe: ({ next }: any) => {
        const newItem = { id: Date.now(), ...data };
        this.products.push(newItem);
        this.save();
        next(newItem);
      },
    };
  }

  delete(id: number) {
  this.products = this.products.filter(p => p.id !== id);
  this.save();
  return of(true);
}
  }
