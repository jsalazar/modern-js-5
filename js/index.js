/* eslint-disable */


// FIRST: Master the following
// filter(), find(), map(), reduce()


// set up some data to be used in advance

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaMix = ['aabb', 'abc', 'cde', 'bcd', 'eafbgc', 'abbbcd', 'bbddefff', 'abccc', 'aacdb', 'cccccc'];
const names = ['Juan', 'Miguel', 'Diego', 'Juaquin', 'Jose', 'Fernando', 'Miguel', 'Diego', 'Juan'];

var employees = [
	{
		name: 'Ana',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Gabriela',
		occupation: 'Web Developer'
	},
	{
		name: 'Marina',
		occupation: 'Web Designer'
	},
	{
		name: 'Margarita',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Carla',
		occupation: 'Web Developer'
	}
];







// -----------------------------------------------------------
// filter()

/* 
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Syntax:
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
// filter(element, index)
*/


// remove specific elements from an Array using filter()


function removeApples(arr) {
  // using anon func
  // return arr.filter(function(fruit) {
  //   return fruit !== 'apple';
  // });

  // ala ES6
  // return arr.filter((fruit) => {return fruit !== 'apple'});
  return arr.filter(fruit => fruit !== 'apple');
}
console.log(removeApples(fruits));



// removing dupes from an Array using filter()


// using Arrow Function
const removeDuplicates = (arr) => arr.filter((element, index) => arr.indexOf(element) === index); 
console.log(removeDuplicates(names));

// same/similar using Function statement
function removeDupes(arr) {
  return arr.filter((element, index) => arr.indexOf(element) === index);
}
console.log('removing dupes: ');
console.log(removeDupes(names));


// using ES6 Set
const dupeFree = new Set(names);
console.log('new Set: ');
console.log(dupeFree);







// -----------------------------------------------------------
// find()
/* 
The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

Syntax:
arr.find(callback[, thisArg])
arr.find(element, index)
*/


// find the apples in the Array

const findApples = fruitBasket.find(function(element) {
  console.log(fruitBasket);
  
  return element === 'apple';
});
console.log('finding apples: ');
console.log(findApples);


// search the employees Array of objects for a specific name, occupation

function findPerson(arrObj) {
  return arrObj.find(elementObj => elementObj.occupation === 'Web Designer');
}
// pass in array of objects
console.log('finding person: ');
console.log(findPerson(employees));


















// -----------------------------------------------------------
// map()
/* 
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

The difference between filter() and map() is that 
filter() applies a boolean Predicate function
  that creates a new Array from elements that result as TRUE - satisfying the requirements of the function
AND
map() applies a regular function 
  that creates a new Array populated by function with various requirements you are free to determine
    it does not have to be boolean TRUE/FALSE

Syntax:
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

arr.map(currentElement, index)
*/

const justApples = fruitBasket.map(function(element) {
  if (element === 'apple') {
    return element;
  }
  else {
    return 'notApple';
  }
});

console.log('mapping apples: ');
console.log(justApples);








// -----------------------------------------------------------
// reduce()
/* 
The reduce() method executes a reducer function (that you provide) on 
each member of the array resulting in a single output value.

The returned value can be of any type (i.e. object, array, string, integer).

6 Primitives: undefined, null, boolean, string, number, symbol

Syntax:
arr.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, initialValue);
arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, []);
arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, {});
arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
  return Math.max(accumulator, currentValue);
}, 0);
arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, '');
*/

// Reduce is versatile:
const filter = (fn, arr) => arr.reduce((newArr, item) => {
  return fn(item) ? newArr.concat([item]) : newArr;
}, []);


//const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// reduce(accumulator, currentValue)
// create a new Object fruitBasketCounts
const fruitBasketCounts = fruitBasket.reduce((tally, fruit) => {
  // truthy check: if tally for currentValue exist
  // use it |or| 0
  tally[fruit] = (tally[fruit] || 0) + 1 ;  
  return tally;
}, {});
console.log('basket counts: ');
console.log(fruitBasketCounts); 

Object.keys(fruitBasketCounts).forEach((currentValue) => {
  console.log(currentValue);
  console.log(fruitBasketCounts[currentValue]);
});


// now iterate thru Object to get counts greater than 1
const fruitBasketKeys = Object.keys(fruitBasketCounts);
console.log('basket keys: ');
console.log(fruitBasketKeys);

const fbUseful = fruitBasketKeys.filter(item => fruitBasketCounts[item] > 1);
console.log('fruit counts > 1: ');
console.log(fbUseful);

// const likeKey = Object.keys(target).find(k => k.toLowerCase() === prop.toLowerCase());

// for(const prop of Object.keys(apple)) {
//   let value = apple[prop];
//   console.log(value, prop);
// }


// remove duplicates with reduce()
var alphaDupes = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const alphaRegular = alphaDupes.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
   accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log('alpha regular: ');
console.log(alphaRegular);








// Then memorize Array Prototype Methods

// -----------------------------------------------------------
// indexOf
// The indexOf() method returns the first index at which a 
// given element can be found in the array, or -1 if it is not present.


// -----------------------------------------------------------
// forEach


// -----------------------------------------------------------
// findIndex()


// -----------------------------------------------------------
// includes()


// -----------------------------------------------------------
// slice()


// -----------------------------------------------------------
// splice()


// -----------------------------------------------------------
// some()


// -----------------------------------------------------------
// every()



// -----------------------------------------------------------
// sort()


// -----------------------------------------------------------
// toString()



// -----------------------------------------------------------
// values()




// REFER to this REPO for excellent examples of functions in Javascript
// https://github.com/30-seconds/30-seconds-of-code






// I should create a new directory called modern-js-algorithms
// and practice these
//    https://github.com/trekhleb/javascript-algorithms
// build this directory using Parcel to learn about it: 
//    https://parceljs.org/getting_started.html







// PRACTICE
// PRACTICE
// PRACTICE
// PRACTICE
// PRACTICE
// PRACTICE
// PRACTICE rewriting all the ES6 code to plain Javascript

// FOR EXAMPLE

/* 
take
Returns an array with n elements removed from the beginning.
Use Array.prototype.slice() to create a slice of the array with n elements taken from the beginning.
*/
const take = (arr, n = 1) => arr.slice(0, n);

// TESTz
console.log(take([1, 2, 3], 5)); // [1, 2, 3]
take([1, 2, 3], 0); // []


    // rewritten without arrow functions
    function takeX(arr, n=1) {
      return arr.slice(0, n);
    }
    // TESTz
    console.log('takeX: ');
    console.log(takeX([1, 2, 3], 2));





// remove duplicates from an Array


let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'






// And finally we can use forEach().


function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

removeDups(names); // // 'John', 'Paul', 'George', 'Ringo'







// Finding all the occurrences of an elementSection

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
// we begin with the first one
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]




// search an array for a value


/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']








// write a function that finds the longest common order of strings in both
// write a functions that takes two strings (s1, s2)
// and returns the longest common subsequence of s1 and s2

// Case examples:
// "ABAZDC"  "BACBAD" => "ABAD"
// "AGGTAB" "GXTXAYB" => "GTAB"
// "aaa" "aa" => "aa"

// first get str len of both string
// determine if they are the same length
// if same len, check if they are ===
// if not ===, check if they contain any of the same characters
// if they contain some of the same chars, 
//  check if the smaller str is a substring of the larger str



// optimize, performance, O(notation)
// how do you estimate big O(notation) ?????

// Interview Strategy
// don't worry about performance at first
// talk outloud and write down notes (english or psuedo-code)
// of possible solutions
// then decide on which one of your strategies to implement






/*
Here is a common JavaScript interview question:

Given an array of n integers sorted in ascending order, how quickly can we find if a given integer is in the array?

There are three ways to solve it that I can think of.

Cheating!
The new includes() method makes this quite simple.
*/
const arr = [1,2,3,4,5];
arr.includes(2); // true
arr.includes(7); // false
//But let’s assume we can’t use this approach.

//Brute Force
//We can iterate through the entire array to find our integer. This takes O(n) time in the worst case.

// O(n) time & O(1) space
function findNum(arr, n) {
  for (let i=0; i<arr.length; i++){
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
}
/*
Binary Search
If the list was not sorted we could solve this in O(n log n) time by first sorting the list O(log n) and then iterating over it O(n).

But it’s already sorted! So we can use binary search to solve this in O(log n) time.

How does binary search work again?

Start with the middle number mid. If n > mid then return the section of the array larger than mid. Otherwise return the section less than mid.
We’ve cut our problem size in half!
Repeat this approach of starting in the middle and dividing the remaining array into half under we find the number or determine it’s not in the array.
*/
// O(log n) time & O(1) space
function binarySearch(arr, n) {
  let min = 0,
      max = arr.length - 1,
      guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === n) {
      return true;
    } else {
      if (arr[guess] < n) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return false;
}


// for more function examples
// visit: https://wsvincent.com/javascript-guide/
// and scroll down to the Function Fun heading