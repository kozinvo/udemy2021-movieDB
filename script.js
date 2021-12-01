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

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log("Произошла ошибка");
}


for (let i = 1; i <= 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
        filmRating = prompt('На сколько оцениет его?', '');

    if (lastFilm != null && filmRating != null && lastFilm != '' && filmRating != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = filmRating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}



console.log(personalMovieDB);