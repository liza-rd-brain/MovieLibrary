import { Component, Input } from '@angular/core';

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
  @Input() movieList!: MovieItem[];
  // movieList = [...movieList];
}
