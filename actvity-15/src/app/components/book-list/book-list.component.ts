import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  // Initial list of books
  bookList: Book[] = [
    { name: 'Heart of the Lotus', author: 'Lina Espina-Moore', date: '1980' },
    { name: 'Book 2', author: 'Author 2', date: '2022' },
  ];

  filteredBookList: Book[] = [...this.bookList];
  bookName: string = '';
  author: string = '';
  date: string = '';
  searchTerm: string = '';

  // Add a new book
  addBook() {
    if (this.bookName.trim() && this.author.trim() && this.date.trim()) {
      const newBook: Book = {
        name: this.bookName,
        author: this.author,
        date: this.date
      };
      this.bookList.push(newBook);
      this.filteredBookList = [...this.bookList];
      this.clearForm();                           // Clear input fields
    }
  }

  // Clear input form
  clearForm() {
    this.bookName = '';
    this.author = '';
    this.date = '';
  }

  // Remove a book from the list
  removeBook(index: number) {
    this.bookList.splice(index, 1);
    this.filteredBookList = [...this.bookList];
  }

  // Clear all books
  clearAll() {
    this.bookList = [];
    this.filteredBookList = [];
  }

  // Filter books based on search term
  searchBooks() {
    if (this.searchTerm.trim()) {
      this.filteredBookList = this.bookList.filter(book =>
        book.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBookList = [...this.bookList];
    }
  }
}

