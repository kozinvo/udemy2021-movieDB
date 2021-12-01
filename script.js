"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
    filmRating = prompt('На сколько оцениет его?', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
    filmRating2 = prompt('На сколько оцениет его?', '');

personalMovieDB.movies[lastFilm] = filmRating;
personalMovieDB.movies[lastFilm2] = filmRating2;

console.log(personalMovieDB);