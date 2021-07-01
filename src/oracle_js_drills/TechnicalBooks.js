/* The goal is to create a Technical Book Class that inherits from the book class in the previous challenge. 
    This Class will also take a title, author, ISBN, edition, and number of copies.
    The technical book class will also provide a getEdition function, which returns the following string.
    "The current version of this book is, followed by the book's edition."
    you should use a template literal for this phrase.
     */

// ------------------------------------- Filler ----------------------------------------------

    function Book (title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    
    Book.prototype.getAvailability = function () {
        if (this.numCopies === 0) {
            return "Out of Stock";
        } else if (this.numCopies <10) {
            return "Low Stock";
        }
        return "In Stock";
    }
    
    
    Book.prototype.sell = function (numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }
    
    Book.prototype.restock = function (numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
    }
    
    
    
    
    // Alternate way
    class Book {
        constructor(title, author, ISBN, numCopies) {
            this.title = title;
            this.author = author;
            this.ISBN = ISBN;
            this.numCopies = numCopies;
        }
    
        get availability() {
            return this.getAvailability();
        }
    
        getAvailability() {
            if (this.numCopies === 0) {
                return "Out of Stock";
            } else if (this.numCopies <10) {
                return "Low Stock";
            }
            return "In Stock";
        }
    
        sell (numCopiesSold = 1) {
            this.numCopies -= numCopiesSold;
        }
    
        restock (numCopiesStocked = 5) {
            this.numCopies += numCopiesStocked;
        }    
    }
    
    
    
    const GameOfThrones = new Book("Game Of Thrones", "Guy with a Beard", 91824723, 5);
    
    console.log(GameOfThrones.getAvailability());
    GameOfThrones.restock(12);
    
    console.log(GameOfThrones.getAvailability());
    GameOfThrones.sell(17);
    
    console.log(GameOfThrones.getAvailability());



    // ------------------------------------- End Of Filler ----------------------------------------------

    

    //Beginning of technical book problem

     class TechnicalBook extends Book{
         constructor (title, author, ISBN, numCopies, edition) {
             super(title, author, ISBN, numCopies);
             this.edition = edition;
         }

         getEdition(){
            return `The current version of this book is ${this.edition}.`;
         }
     }

const crackingTheCodingInterview = new TechnicalBook (
    "Cracking The Coding Interview",
    "Kathy",
    48293742,
    15,
    2
)

console.log(crackingTheCodingInterview.availability);
console.log(crackingTheCodingInterview.getEdition());


