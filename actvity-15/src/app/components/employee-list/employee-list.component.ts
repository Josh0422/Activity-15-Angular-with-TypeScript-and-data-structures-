import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeList: { name: string; position: string; department: string }[] = [];
  filteredEmployeeList = [...this.employeeList];
  name: string = '';
  position: string = '';
  department: string = '';
  searchTerm: string = '';

  addEmployee() {
    if (this.name && this.position && this.department) {
      this.employeeList.push({ name: this.name, position: this.position, department: this.department });
      this.filteredEmployeeList = [...this.employeeList]; // Update filtered list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.name = '';
    this.position = '';
    this.department = '';
  }

  removeEmployee(index: number) {
    this.employeeList.splice(index, 1);
    this.filteredEmployeeList = [...this.employeeList]; // Update filtered list
  }

  clearAll() {
    this.employeeList = [];
    this.filteredEmployeeList = [];
  }

  searchEmployees() {
    this.filteredEmployeeList = this.employeeList.filter(employee =>
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
