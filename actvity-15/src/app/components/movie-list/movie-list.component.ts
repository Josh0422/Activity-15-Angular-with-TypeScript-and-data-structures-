import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movielist: string[] = ['The Matrix', 'Inception', 'Interstellar']; // Sample movie list
  filteredMovieList = [...this.movielist]; // A copy of the movie list used for filtering
  newMovie: string = ''; // Model for the new movie input
  searchTerm: string = ''; // Model for the search input

  addMovie() {
    if (this.newMovie.trim()) {
      this.movielist.push(this.newMovie.trim());
      this.filteredMovieList = [...this.movielist]; // Update filtered list
      this.newMovie = ''; // Clear input field
    }
  }

  removeMovie(index: number) {
    this.movielist.splice(index, 1);
    this.filteredMovieList = [...this.movielist]; // Update filtered list
  }

  clearAll() {
    this.movielist = [];
    this.filteredMovieList = [];
  }

  searchMovies() {
    const term = this.searchTerm.toLowerCase();
    this.filteredMovieList = this.movielist.filter(movie =>
      movie.toLowerCase().includes(term)
    );
  }
}
