import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjectList: string[] = ['Backpack', 'High Quality Tools', 'Shoes'];
  filteredSubjectList: string[] = [...this.subjectList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addSubject() {
    if (this.name.trim()) {
      this.subjectList.push(this.name);
      this.filteredSubjectList = [...this.subjectList];
      this.name = '';  // Clear input field
    }
  }


  removeSubject(index: number) {
    this.subjectList.splice(index, 1);
    this.filteredSubjectList = [...this.subjectList];  // Update filtered list
  }


  clearAll() {
    this.subjectList = [];
    this.filteredSubjectList = [];
  }


  searchSubject() {
    if (this.searchTerm.trim()) {
      this.filteredSubjectList = this.subjectList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredSubjectList = [...this.subjectList];  // Reset filtered list
    }
  }
}

