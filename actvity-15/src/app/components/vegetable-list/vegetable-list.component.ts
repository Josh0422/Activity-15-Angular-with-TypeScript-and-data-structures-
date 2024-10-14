import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
 vegetableList: string[] = ['Cabbage', 'Carrot', 'Eggplants'];
  filteredVegetableList: string[] = [...this.vegetableList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addVegetable() {
    if (this.name.trim()) {
      this.vegetableList.push(this.name);
      this.filteredVegetableList = [...this.vegetableList];
      this.name = '';  // Clear input field
    }
  }


  removeVegetable(index: number) {
    this.vegetableList.splice(index, 1);
    this.filteredVegetableList = [...this.vegetableList];  // Update filtered list
  }


  clearAll() {
    this.vegetableList = [];
    this.filteredVegetableList = [];
  }


  searchVegetable() {
    if (this.searchTerm.trim()) {
      this.filteredVegetableList = this.vegetableList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredVegetableList = [...this.vegetableList];  // Reset filtered list
    }
  }
}

