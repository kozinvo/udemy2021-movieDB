"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { //isNan - правда если не число
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // for (let i = 0; i < 3; i++) {
            // personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');

            // if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
            //     i--;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую и пробел`);
            if (genres == '' || genres == null) {
                console.log('incorrect');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

};

// showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);