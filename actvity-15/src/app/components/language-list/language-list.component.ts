import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languageList: string[] = ['Spanish', 'Japanese', 'Russian'];
  filteredLanguageList: string[] = [...this.languageList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addLanguage() {
    if (this.name.trim()) {
      this.languageList.push(this.name);
      this.filteredLanguageList = [...this.languageList];
      this.name = '';  // Clear input field
    }
  }


  removeLanguage(index: number) {
    this.languageList.splice(index, 1);
    this.filteredLanguageList = [...this.languageList];  // Update filtered list
  }


  clearAll() {
    this.languageList = [];
    this.filteredLanguageList = [];
  }


  searchLanguage() {
    if (this.searchTerm.trim()) {
      this.filteredLanguageList = this.languageList.filter(model =>
          model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredLanguageList = [...this.languageList];  // Reset filtered list
    }
  }
}


