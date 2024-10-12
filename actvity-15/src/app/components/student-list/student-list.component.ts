import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  studentList: { name: string; course: string; section: string }[] = [];
  name: string = '';
  course: string = '';
  section: string = '';

  addItem() {
    if (this.name && this.course && this.section) {
      this.studentList.push({ name: this.name, course: this.course, section: this.section });
      this.name = '';
      this.course = '';
      this.section = '';
    }
  }

  removeItem(student: { name: string; course: string; section: string }) {
    this.studentList = this.studentList.filter(item => item !== student);
  }
}
