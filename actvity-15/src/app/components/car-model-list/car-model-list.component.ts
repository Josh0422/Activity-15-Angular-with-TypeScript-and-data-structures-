import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent {
  // Predefined list of car models
  carModelList: string[] = ['Toyota Camry', 'Honda Civic', 'Ford Mustang'];
  filteredCarModelList: string[] = [...this.carModelList];  // Initialize filtered list with all models
  name: string = '';  // New car model name
  searchTerm: string = '';  // Search term

  // Add a car model to the list
  addCarModel() {
    if (this.name.trim()) {
      this.carModelList.push(this.name);
      this.filteredCarModelList = [...this.carModelList];  // Update filtered list
      this.name = '';  // Clear input field
    }
  }

  // Remove a car model from the list
  removeCarModel(index: number) {
    this.carModelList.splice(index, 1);
    this.filteredCarModelList = [...this.carModelList];  // Update filtered list
  }

  // Clear all car models
  clearAll() {
    this.carModelList = [];
    this.filteredCarModelList = [];
  }

  // Filter car models based on the search term
  searchCarModel() {
    if (this.searchTerm.trim()) {
      this.filteredCarModelList = this.carModelList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCarModelList = [...this.carModelList];  // Reset filtered list
    }
  }
}
