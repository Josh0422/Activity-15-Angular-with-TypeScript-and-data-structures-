import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  toolList: string[] = ['Screw Driver', 'Mallet', 'Hammer'];
  filteredToolList: string[] = [...this.toolList];
  name: string = '';
  searchTerm: string = '';  // Search term


  addTool() {
    if (this.name.trim()) {
      this.toolList.push(this.name);
      this.filteredToolList = [...this.toolList];
      this.name = '';  // Clear input field
    }
  }


  removetool(index: number) {
    this.toolList.splice(index, 1);
    this.filteredToolList = [...this.toolList];  // Update filtered list
  }


  clearAll() {
    this.toolList = [];
    this.filteredToolList = [];
  }


  searchTool() {
    if (this.searchTerm.trim()) {
      this.filteredToolList = this.toolList.filter(model =>
        model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredToolList = [...this.toolList];  // Reset filtered list
    }
  }
}

