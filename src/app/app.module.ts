import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    MovieListComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
