/*
Instructions:
Your task is to complete the described object which uses closure to create a book with name and current page.
Additionally the bookObject will return an inner object with functions that will allow the code outside bookObject to access and modify BookObject Scoped Variables.
*/


function defineClosure() {
    function BookObject(name = "The Count of Monte Cristo", currentPage = 873) {
        console.log(`\n\nCreating new Book Object with name: ${name} and currentPage: ${currentPage}`);
        var currentPageNumber = currentPage;
        var bookName = name;

        // construct and return an object with the three methods defined below.
        // Your task is to fill in these methods according to the comments in order to to allow outside functions to access           
        // and change your BookObject variables ONLY using these gateway functions
        // All methods have access to currentPageNumber and bookName variables, but they do not exist as regular variables outside of the bookObject
        return {
            "getBookTitle": function () {
                // your code here to return the bookName
                return bookName;

            },
            "turnPage": function () {
                // your code here to increment the currentPageNumber
                return currentPageNumber++;
            },
            "getPage": function () {
                //your code here to return the currentPageNumber
                return currentPageNumber;
            }
        };
    }

    var myBook = BookObject('Reckless', 28);
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    // creating a new instance of myBook, this resets all inner variables as its completely different object and scope
    myBook = BookObject();
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    return BookObject();
}

defineClosure();






// var keyword is function scoped

// function outer() {
//     var counter = 0;
//     function inner() {
//         console.log(counter);
//         counter++; // this increments the counter variable even when inner is called outside the scope of outer
//     }
//     return inner;
// }

// var x = outer(); // As we're calling outer here, x is a reference to inner
// x(); // alerts 0, on the first call of inner, counter = 0, so 0 is alerted
// x();
// //x(): // alerts 1, on the second call of inner, we still have the reference to counter which is 1 even though counter does not exist at this place in the code
// console.log(x.counter);
// but now if you try to write code that directly accesses the counter within the instance of the function outer
//console.log(x.counter); // alerts undefined rather than alerting 2 because counter by itself does not exist



// var myName = 'anthony';
// console.log(myName);

// function run(a) {
//   console.log(a);
//   console.log(myName);
//   var b = 2;
//   console.log(b)
// }

// run(1);

// // console.log(a);
// // console.log(b);

// const dontChangeMe = 100;
// // dontChangeMe = 99;
// console.log(dontChangeMe);

// let changeMe = 900;
// changeMe = 999;
// console.log(changeMe);

// // let and const are block scoped

// if (changeMe === 999) {
//   const hungry = true;
//   console.log(hungry);
// }

// // console.log(hungry);
