import { Component } from '@angular/core';
import movieList from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  captiontext = ['Популярные фильмы', 'Самый лучший фильм'];
  movieList = [...movieList];
}
