// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let moviesArray = {
  title: "The Shawshank Redemption",
  year: 1994,
  director: "Frank Darabont",
  duration: "2h 22min",
  genre: ["Crime", "Drama"],
  score: 9.3,
};

function getAllDirectors(moviesArray) {
  let newArray = moviesArray.map((peli) => peli.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielberg = moviesArray.filter(
    (peli) =>
      peli.director === "Steven Spielberg" && peli.genre.includes("Drama")
  );

  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let elementosLimpios = moviesArray.filter(
    (pelis) => pelis.score !== undefined
  );

  let suma = elementosLimpios.reduce(
    (previous, current) => previous + current.score,
    0
  );

  let result = suma / moviesArray.length;

  let decimales = result.toFixed(2);

  return parseFloat(decimales);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  /*
Filter only drama array nuevo
Reduce scores
calcular media
Dar 0 si no hay dramas
*/

  let dramaMovies = moviesArray.filter((dramas) =>
    dramas.genre.includes("Drama")
  );

  /* esto no va 
  if (!dramaMovies.genre.includes("Drama")) {return 0}
  */

  // .find method para buscar si hay dramas, da undefined si no encuentra

  var vamohABuscar = dramaMovies.find(function (post, index) {
    if (post.genre == "Drama") return true;
  });

  if (vamohABuscar === undefined) {
    return 0;
  }

  let sumaDrama = dramaMovies.reduce(
    (previous, current) => previous + current.score,
    0
  );

  let resultDrama = sumaDrama / dramaMovies.length;

  let decimalesDrama = resultDrama.toFixed(2);

  return parseFloat(decimalesDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = moviesArray.map((peli) => peli);

  let byDate = newArray.slice(0);
  byDate.sort(function (peli1, peli2) {
    return peli1.year - peli2.year;
  });

  /* if (peli1.year === peli2.year){
    return peli1.title < peli2.title
  }

  /*
var byName = newArray.slice(0);
byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
*/

  return byDate;

  /*
  Crear un nuevo array con map
  Ordenar de menos a mas
  */
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArray = moviesArray.map((peli) => peli);

  newArray.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });

  let pelis20 = [];

  return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
