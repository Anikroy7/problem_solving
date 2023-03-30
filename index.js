// porblem:1 *****

//Write a program that outputs the top n elements from a list.
// largest(2, [7, 6, 5, 4, 3, 2, 1])
// Expected output: // => [6,7]

/*
 --------------Pseudo code----------
step-1: seriazlize elements of array assending order
      [1,2,3,4,5,6,7]-done

step-2: start a for loop and skip element based on number
   const skipedValue=  array.length - num

   when lopped value bigger than skiped value then it push current indexed value in new element

   if skipedValue > looped value
        newArray.push = arr[index]
f       inally return newArray
*/

function largest(n, array) {
  // Find the n highest elements in a list
  if (array.length > 0) {
    const assendingArray = array.sort((a, b) => a - b);
    const skipedValue = array.length - n;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i > skipedValue - 1) {
        newArray.push(assendingArray[i]);
      }
    }
    return newArray;
  }

  return [];
}

const result = largest(3, [9, 1, 50, 22, 3, 13, 2, 63, 5]);

// porblem:2 *****

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

// --------------Pseudo code----------

/* 
step : make a reduce fucntion and return a string into it

intial value "("
if current index<=3 && i!==0 acc += arr[i] output: (123 

    else {
        acc+= ") "

    }

*/

function createPhoneNumber(numbers) {
  return numbers.reduce((acc, _, i) => {
    if (i <= 3 && i !== 0) {
      acc += numbers[i - 1];
      if (i === 3) {
        acc += ") ";
      }
    }
    if (i > 3) {
      acc += numbers[i - 1];
      if (i === 6) {
        acc += "-";
      }
    }
    return acc;
  }, "(");
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* 
    problem:3 ->
    Write a function takes an number of array and return an array of object with how many times this number repeat on array.
    Like> [2,5,6,9,5,6,9]

    output: [
        {2: 1},
        {5: 2},
        {6: 2},
        {9: 2}
    ]

*/

// problem:3

/* 

*/

const arr = [1, 1, 1, 2, 88, 99, 66, 71, 1, 1, 1];

const arrOfObj = arr.reduce((acc, curr) => {
  let obj = {
    [curr]: 1,
  };

  const findedElement = acc.find((e) => e[curr]);
  if (findedElement) {
    findedElement[curr]++;
    acc.push(findedElement);
  } else {
    acc.push(obj);
  }

  return acc;
}, []);

// console.log(new Set(arrOfObj));

//problem 4

/* 
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

strings = ['ab', 'ab', 'abc']
queires =['ab', 'abc', 'abd']

result =[2,1,0]
*/
/* 
// Pseudo code 

 step 1: make an object that give how many time an item repate or not based on string 
        object=  {
                  ab: 2,
                  abc:1
                  }
 step :2 run a for loop then check every quries in this value if this value exits on this object then 
 set this value in this position if no exists then set value 0 in this position
                
*/

const strings = ["ab", "ab", "abc", 'jfk'];
const queries = ["ab",'ab', "abc", "abd", 'jfk'];

function matchingStrings(strings, queries) {
  // Write your code here
  const stringsToObj = {};

  for (let v of strings) {
    stringsToObj[v] = (stringsToObj[v] || 0) + 1;
  }

  for (let i = 0; i < queries.length; i++) {
    if(stringsToObj[queries[i]]){
      queries[i]=stringsToObj[queries[i]]
    }else{
      queries[i]=0
    }
  }
  return queries
}

console.log(matchingStrings(strings, queries));
