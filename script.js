"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //isNan - правда если не число
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


function rememberMyFilms() {
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
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}
writeYourGenres();

console.log(personalMovieDB);