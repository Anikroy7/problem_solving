// FIXME: porblem:1 *****

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

// FIXME: porblem:2 *****

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

/* function createPhoneNumber(numbers) {
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
} */

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* 
    //FIXME: problem:3
    Write a function takes an number of array and return an array of object with how many times this number repeat on array.
    Like> [2,5,6,9,5,6,9]

    output: [
        {2: 1},
        {5: 2},
        {6: 2},
        {9: 2}
    ]

*/
/* 
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
}, []); */

// console.log(new Set(arrOfObj));

// FIXME:  problem 4

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

const strings = ["ab", "ab", "abc", "jfk"];
const queries = ["ab", "ab", "abc", "abd", "jfk"];

function matchingStrings(strings, queries) {
  // Write your code here
  const stringsToObj = {};

  for (let v of strings) {
    stringsToObj[v] = (stringsToObj[v] || 0) + 1;
  }

  for (let i = 0; i < queries.length; i++) {
    if (stringsToObj[queries[i]]) {
      queries[i] = stringsToObj[queries[i]];
    } else {
      queries[i] = 0;
    }
  }
  return queries;
}

// console.log(matchingStrings(strings, queries));

// FIXME: Problem 5

/* 
 Given an array of integers, where all elements but one occur twice, find the unique element.

 INPUT: [1,2,2,3,3,4,5,5,1];
 OUTPUT: 4 

 Pseudo code 
  step 1 : take a variable let it is the unique 
  value.
  let unique : array[0]
  step 2: Itarate this array check value with this variable if again this value come then set this value false. other wise this value will be the unique value. 

  run a loop form 1 no. index

  if arr[i]=== unique 
  if(!arr[i+1]){
    unique = arr[i+1]
  }else{
    return false
  }
    i = i+2

*/
/* 
function lonelyinteger(...array) {
  
  // Write your code here
  const arrayToObj = {};

  let unique = false;
  for (let v of array) {
    console.log(array);
      arrayToObj[v] = (arrayToObj[v] || 0) + 1;
  }

  for (let p in arrayToObj) {
      if (arrayToObj[p] === 1) unique = p;
  }

return unique
}

console.log(lonelyinteger(1, 1 ,2)); */

//FIXME:  PROBLEM : 6
/* An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .

Reverse an array of integers.

Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

INPUT : [1,2,3,4]
OUPUT : [4,3,2,1]

*/
/* function reverseArray(a) {
  // Write your code here
  let newArray =[]
  let index =0
  for (let i = a.length - 1; i >= 0; i--) {
   newArray[index] = a[i];
    index++
  }
  return newArray
}

console.log(reverseArray([1, 2, 3])); */

//FIXME: problem : 7

/* n arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example 
 
ranked =[ 100,90,80,80,70]
player=[70,80,105]

Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

int ranked[n]: the leaderboard scores
int player[m]: the player's scores
Returns

int[m]: the player's rank after each new score

*/

/* const ranked = [100, 90, 80, 80, 70];
const player = [70, 80, 105,100];

function climbingLeaderboard(ranked, player) {
  // Write your code here
  const newPlayer = [...player];
  const sortedRank = ranked.sort((a, b) => a - b);
  const sortedPlayer = newPlayer.sort((a, b) => a - b);
  console.log(player);
  const mergedLeaderBoard = [
    ...new Set([...sortedRank, ...sortedPlayer].sort((a, b) => b - a)),
  ];
  const output = [];
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < mergedLeaderBoard.length; j++) {
      if (player[i] === mergedLeaderBoard[j]) {
        output.push(j + 1);
      }
    }
  }
  return output;
}
console.log(climbingLeaderboard(ranked, player)); */

//FIXME: problem :8

/* 
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points. */
/* function compareTriplets(a, b) {
  const result = [];
  let aPoint = 0;
  let bPoint = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aPoint++;
    if (a[i] < b[i]) bPoint++;
  }
  result[0] = aPoint;
  result[1] = bPoint;

  return result;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])); */

//FIXME: problem: 9

/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9. The right to left diagonal = 3+5+9. Their absolute difference is 15-17.

*/
/* 
function diagonalDifference(arr) {
  // Write your code here
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonal += arr[i][i];
    rightToLeftDiagonal += arr[i][arr.length - 1 - i];
  }
  if(leftToRightDiagonal> rightToLeftDiagonal) return leftToRightDiagonal- rightToLeftDiagonal;
  return rightToLeftDiagonal- leftToRightDiagonal
}
const arr = [
   [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
  [6, 8,3],
  [-6, 9,9],
];
console.log(diagonalDifference(arr)); */

// FIXME: problem 10

/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example arr=[1,1,0,-1,-1]

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
0.400000
0.400000
0.200000
*/

/* function plusMinus(arr) {
  // Write your code here
  let totalPositive = 0;
  let totalNegative = 0;
  let totalZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) totalPositive++;
    if (arr[i] < 0) totalNegative++;
    if (arr[i] === 0) totalZero++;
  }
  return `${(totalPositive / arr.length).toFixed(6)}${(totalNegative / arr.length).toFixed(6)} ${
    ((totalZero / arr.length).toFixed(6))
  }`;
}

console.log(plusMinus([-4, 3 ,-9 ,0, 4, 1])); */

//FIXME: problem: 11
/* 
Staircase detail
This is a staircase of size 
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .
   #
  ##
 ###
####

*/

/* function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n ; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }

}

staircase(6); */

//FIXME: problem: 12

/* 
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

Function Description

Complete the insertNodeAtTail function in the editor below.

insertNodeAtTail has the following parameters:

SinglyLinkedListNode pointer head: a reference to the head of a list
int data: the data value for the node to insert
Returns

SinglyLinkedListNode pointer: reference to the head of the modified linked list
*/

/* const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
  }
};

function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);
  // console.log(newNode);
  head.head = newNode;
  if (head.head) {
    head.head.next = newNode;
  }

  console.log(head);
   if(head===null) {
    head.head = newNode;
    head.tail = newNode;
  }
}
const singlyLinkedList = new SinglyLinkedList();
insertNodeAtTail(singlyLinkedList, 5);
insertNodeAtTail(singlyLinkedList.head, 8);
console.log(singlyLinkedList); */

//FIXME: problem: 13

/*  
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Exp: [1,3,5,7,9]

The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9=24. The function prints

*/
/* 
function miniMaxSum(arr) {
  // Write your code here
  const stringToArr = arr.split(" ");

  const sortedArr = stringToArr.sort((a, b) => a - b);
  console.log("sortedArr", sortedArr);

  let minimumSum = 0;
  let maximumSum = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (i !== 0) maximumSum += parseInt(sortedArr[i]);
    if (i < sortedArr.length - 1) minimumSum += parseInt(sortedArr[i]);
  }

  return `${minimumSum} ${maximumSum}`;
}

const arr = [7, 69, 2, 221, 8974];
const values = miniMaxSum("1 2 3 4 5");

console.log("values", values);
 */

// FIXME: problem: 14

/* 
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Exp: [4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

function birthdayCakeCandles(candles) {
  // Write your code here
  let tallestElement = candles[0];
  let output = 0;
  for (let i = 0; i < candles.length; i++) {
    if (tallestElement < candles[i]) {
      tallestElement = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (tallestElement === candles[i]) {
      output++
    }
  }

  return output;
}
const candles = [4, 4, 1, 3];

console.log(birthdayCakeCandles(candles));
