import { Component } from '@angular/core';
import movieList from '../data.json';

console.log(movieList);

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   year: number;
//   description: string;
//   genre: string;
// }

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  movieList = [...movieList];
}
