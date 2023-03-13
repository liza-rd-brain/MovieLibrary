import { Component, Input } from '@angular/core';

import { MovieItem } from '../movie-list/movie-list.component';
import { GetGenreService } from '../get-genre.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  constructor(private genreService: GetGenreService) {}
  @Input() movie!: MovieItem;

  getGenre(genreNumberList: number[]) {
    return this.genreService.getGenreNameList(genreNumberList);
  }
}
