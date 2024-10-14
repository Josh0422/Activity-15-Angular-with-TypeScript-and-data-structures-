import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animalList: string[] = ['Tiger', 'Lion', 'Elephant'];
  filteredAnimalList: string[] = [...this.animalList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addAnimal() {
    if (this.name.trim()) {
      this.animalList.push(this.name);
      this.filteredAnimalList = [...this.animalList];
      this.name = '';  // Clear input field
    }
  }


  removeAnimal(index: number) {
    this.animalList.splice(index, 1);
    this.filteredAnimalList = [...this.animalList];  // Update filtered list
  }


  clearAll() {
      this.animalList = [];
    this.filteredAnimalList = [];
  }


  searchAnimal() {
    if (this.searchTerm.trim()) {
      this.filteredAnimalList = this.animalList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredAnimalList = [...this.animalList];  // Reset filtered list
    }
  }
}

