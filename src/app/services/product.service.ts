import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', description: 'Description A', priceUsd: 50 },
    { id: 2, name: 'Product B', description: 'Description B', priceUsd: 100 },
    { id: 3, name: 'Product C', description: 'Description C', priceUsd: 150 },
    { id: 4, name: 'Product D', description: 'Description D', priceUsd: 200 },
    { id: 5, name: 'Product E', description: 'Description E', priceUsd: 250 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push({ ...product, id: this.products.length + 1 });
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
