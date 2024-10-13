import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruitList: string[] = ['Apple', 'Banana', 'Cherry'];
  filteredFruitList: string[] = [...this.fruitList];
  name: string = '';
  searchTerm: string = '';

  // Add a new fruit
  addFruit() {
    if (this.name.trim()) {
      this.fruitList.push(this.name);
      this.filteredFruitList = [...this.fruitList];
      this.name = '';
    }
  }

  // Remove a fruit
  removeFruit(index: number) {
    this.fruitList.splice(index, 1);
    this.filteredFruitList = [...this.fruitList];
  }

  // Clear all fruits
  clearAll() {
    this.fruitList = [];
    this.filteredFruitList = [];
  }

  // Filter fruits based on search term
  searchFruit() {
    if (this.searchTerm.trim()) {
      this.filteredFruitList = this.fruitList.filter(fruit =>
        fruit.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredFruitList = [...this.fruitList];    // Reset filtered list when search is cleared
    }
  }
}
