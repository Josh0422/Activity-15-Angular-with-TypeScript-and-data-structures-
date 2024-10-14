import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: string[] = ['Backpack', 'High Quality Tools', 'Shoes'];
  filteredProductList: string[] = [...this.productList];
  name: string = '';  // New car model name
  searchTerm: string = '';  // Search term

  // Add a car model to the list
  addProduct() {
    if (this.name.trim()) {
      this.productList.push(this.name);
      this.filteredProductList = [...this.productList];
      this.name = '';  // Clear input field
    }
  }

  // Remove a car model from the list
  removeProduct(index: number) {
    this.productList.splice(index, 1);
    this.filteredProductList = [...this.productList];  // Update filtered list
  }

  // Clear all car models
  clearAll() {
    this.productList = [];
    this.filteredProductList = [];
  }


  searchProduct() {
    if (this.searchTerm.trim()) {
      this.filteredProductList = this.productList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProductList = [...this.productList];  // Reset filtered list
    }
  }
}
