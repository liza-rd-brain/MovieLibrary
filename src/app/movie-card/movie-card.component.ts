import { Component, Input } from '@angular/core';

import { MovieItem } from '../movie-list/movie-list.component';
import { GetGenreService } from '../service/get-genre.service';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  constructor(
    private genreService: GetGenreService,
    private localStorageService: LocalStorageService
  ) {}
  @Input() movie!: MovieItem;
  @Input() isHover!: boolean;

  changeBestMovie() {
    const movieJSON = JSON.stringify(this.movie);
    this.localStorageService.changeData(movieJSON);
  }

  getGenre(genreNumberList: number[]) {
    return this.genreService.getGenreNameList(genreNumberList);
  }

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseOut() {
    this.isHover = false;
  }
}
