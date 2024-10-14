import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sportsList: string[] = ['Chess', 'Basketball', 'Football'];
  filteredSportsList: string[] = [...this.sportsList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addSports() {
    if (this.name.trim()) {
      this.sportsList.push(this.name);
      this.filteredSportsList = [...this.sportsList];
      this.name = '';  // Clear input field
    }
  }


    removeSports(index: number) {
    this.sportsList.splice(index, 1);
    this.filteredSportsList = [...this.sportsList];  // Update filtered list
  }


  clearAll() {
    this.sportsList = [];
    this.filteredSportsList = [];
  }


  searchSports() {
    if (this.searchTerm.trim()) {
        this.filteredSportsList = this.sportsList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredSportsList = [...this.sportsList];  // Reset filtered list
    }
  }
}

