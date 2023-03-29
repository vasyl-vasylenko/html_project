
const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');

const personalMovieDB = {
      const: numberOfFilms,
      movies: {},
      actors: {},
      geners: [],
      privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('один из последних просмотренных фильмов', ''),
          b = prompt('На сколько его оцените?', '');
    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
console.log(personalMovieDB);