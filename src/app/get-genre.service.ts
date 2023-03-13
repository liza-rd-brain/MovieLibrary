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
    return genreNumberList.reduce(
      (prevList: string[], genreNumber: number, index: number) => {
        const hasСomma =
          genreNumberList.length > 1 && genreNumberList.length - 1 > index;

        return [
          ...prevList,
          `${this.genre[genreNumber - 1]}${hasСomma ? ', ' : ''}`,
        ];
      },
      []
    );
  }
}
