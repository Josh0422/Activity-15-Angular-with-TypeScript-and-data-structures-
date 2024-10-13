import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courselist: string[] = ['BSIT', 'BSHM', 'BSED'];   // Initial list of courses
  filteredCourseList: string[] = [...this.courselist]; // Filtered list for search functionality
  name: string = '';                                 // For adding new courses
  searchTerm: string = '';                           // Search term

  // Add a new course to the list
  addCourse() {
    if (this.name.trim()) {  // Check if the input is not empty
      this.courselist.push(this.name);
      this.filteredCourseList = [...this.courselist]; // Reset the filtered list after adding
      this.name = '';                                 // Clear the input after adding
    }
  }

  // Remove a course from the list
  removeCourse(index: number) {
    this.courselist.splice(index, 1);
    this.filteredCourseList = [...this.courselist];  // Update the filtered list after removal
  }

  // Clear all courses
  clearAll() {
    this.courselist = [];
    this.filteredCourseList = [];
  }

  // Search for courses based on the search term
  searchCourse() {
    if (this.searchTerm.trim()) {
      this.filteredCourseList = this.courselist.filter(course =>
        course.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCourseList = [...this.courselist]; // Reset if search term is cleared
    }
  }
}

