import { Injectable } from '@angular/core';
import { genre } from './genre';

@Injectable({
  providedIn: 'root',
})
export class GetGenreService {
  constructor() {}

  private genre: string[] = [
    'драма',
    'биография',
    'история',
    'фэнтези',
    'приключения',
    'боевик',
    'мультфильм',
    'комедия',
    'триллер',
    'детектив',
    'фантастика',
  ];

  getGenreNameList(genreNumberList: number[]) {
    return genreNumberList.reduce((prevList: string[], genreNumber: number) => {
      return [...prevList, this.genre[genreNumber]];
    }, []);
  }
}
