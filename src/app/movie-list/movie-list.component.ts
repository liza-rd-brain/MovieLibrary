import { Component } from '@angular/core';
import movieList from '../data.json';

console.log(movieList);

//TODO: took out like types??
export interface MovieItem {
  id: number;
  name: string;
  year: number;
  description: string;
  genre: number[];
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  movieList = [...movieList];
}
