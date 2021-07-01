/*Create a movie object that takes in 5 arguments. Title, Director, Genre, Release Year, and Rating.
The Movie prototype should have a function called get overview, which logs the following overview for each film
Movie, a genre, film directed by director was released. It received a rating of rating. You can use either class or 
function syntax to create your prototype. Once you create your movie object, create a few movies to test it out.
*/


// First Solution
function Movie(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
};

Movie.prototype.getOverView = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released
    in ${this.releaseYear}. It received a rating of ${this.rating}`;
};

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman);


class Movie {

    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverView() {

    }
}