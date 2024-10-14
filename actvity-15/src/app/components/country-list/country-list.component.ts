import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countryList: string[] = ['Philippines', 'Korea', 'Japan'];
  filteredCountryList: string[] = [...this.countryList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addCountry() {
    if (this.name.trim()) {
      this.countryList.push(this.name);
      this.filteredCountryList = [...this.countryList];
      this.name = '';  // Clear input field
    }
  }


  removeCountry(index: number) {
    this.countryList.splice(index, 1);
    this.filteredCountryList = [...this.countryList];  // Update filtered list
  }


  clearAll() {
    this.countryList = [];
    this.filteredCountryList = [];
  }


  searchCountry() {
    if (this.searchTerm.trim()) {
      this.filteredCountryList = this.countryList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCountryList = [...this.countryList];  // Reset filtered list
    }
  }
}
