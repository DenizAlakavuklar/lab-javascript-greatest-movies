// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const arrayOfAllDirectors = moviesArray.map((movie) => { return movie.director; });
    return arrayOfAllDirectors
}

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama");
    }).length;
}

// console.log (howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length !== 0) {

        let sum = moviesArray.filter((element) => element.score).reduce(function (value, moviesArray) {
            return value + moviesArray.score;
        }, 0);
        return Math.round((sum / moviesArray.length) * 100) / 100
    }
    else { return 0 }
}

// console.log (scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    if (moviesArray.length !== 0) {
        const newArr = moviesArray.filter((movie) => { return movie.genre.includes('Drama') })
        let sum = newArr.reduce(function (value, newArr) {
            return value + newArr.score;
        }, 0)
        return Math.round((sum / newArr.length) * 100) / 100;
    }
    else {return 0} }


//console.log (dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const copymoviesArr= [...moviesArray];
    return copymoviesArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        const firstMovieTitle = a.title.toLowerCase();
        const secondMovieTitle = b.title.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
          return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
//console.log (orderByYear(movies) )

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    return moviesArray
      .map(movie => movie.title)
      .sort((a, b) => {
        const firstMovieTitle = a.toLowerCase();
        const secondMovieTitle = b.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
          return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice(0, 20);
  }
//console.log (orderAlphabetically(movies) )

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
