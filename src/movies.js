const movie = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    }
]
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const nameDirectors = moviesArray.map(function(movies){
        return movies.director
    })
    return nameDirectors 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const steavenMovies = moviesArray.filter(function(movie){
     return  movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })

    return steavenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const avgRate = moviesArray.reduce(function(arr,val){
        return arr + (val.score || 0)
    },0)

    if (!avgRate){
        return 0
    }
/* 
    const looking4undefined = moviesArray.map(function(movies){
        if (movies.score === undefined){
            movies.score = ""
        }
        return looking4undefined
    }) */

    let result = avgRate/moviesArray.length
    return Number(result.toFixed(2))
    
}

console.log(scoresAverage(movie))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function(movie){
        return movie.genre.includes("Drama")
    })
    
    const avgRate = dramaMovies.reduce(function(arr,val){
        
        return arr + val.score
    },0)
    
    if (dramaMovies.length === 0){
        return 0
    }

    let result = avgRate/dramaMovies.length
    return Number(result.toFixed(2))
}

console.log(dramaMoviesScore(movie))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newSortedMovies = [...moviesArray]
     const sortedMovies = newSortedMovies.sort(function (a,b){   
        if ( a.year === b.year){
            return a.title.localeCompare(b.title) 
        }
        else {
            return a.year - b.year
        }
    })
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    

    const justTitles = moviesArray.map(function(movie){
        return  movie.title 
       })
    const orderedMovies = justTitles.sort()
    return orderedMovies.slice(0,20)
}

console.log(orderAlphabetically(movie))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

