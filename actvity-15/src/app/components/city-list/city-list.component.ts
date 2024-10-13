import { Component } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  cityList: string[] = ['Caloocan City', 'Quezon City', 'Bulacan'];
  filteredCityList: string[] = [...this.cityList];
  name: string = '';
  searchTerm: string = '';

  // Add a new city
  addCity() {
    if (this.name.trim()) {
      this.cityList.push(this.name);
      this.filteredCityList = [...this.cityList]; // Update filtered list
      this.name = ''; // Clear input
    }
  }

  // Remove a city
  removeCity(index: number) {
    this.cityList.splice(index, 1);
    this.filteredCityList = [...this.cityList]; // Update filtered list
  }

  // Clear all cities
  clearAll() {
    this.cityList = [];
    this.filteredCityList = [];
  }

  // Filter cities based on search term
  searchCity() {
    if (this.searchTerm.trim()) {
      this.filteredCityList = this.cityList.filter(city =>
        city.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCityList = [...this.cityList]; // Reset filtered list
    }
  }
}
