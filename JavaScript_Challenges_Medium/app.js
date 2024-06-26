// Given two values, return the first one if it is falsy, otherwise return the second one.
// in one line using a tenery//
// putting an ! in front of any element returns the opposite boolean of it.
//return numa % 2 === 0 ? 1: -1;//
// To test to see if an element is truethy or falsey in the console type in !!0, !!"", etc//

function filterOutFalsy( num1 , num2 ){
  return !num1 ? num1 : num2;
}
console.log(filterOutFalsy(0 , 500));
console.log(filterOutFalsy( false , 100));
console.log(filterOutFalsy([true,'Dog']));

//Return the length of any given array //
function arrLength(arr){
  return arr.length;
}
console.log(arrLength([1,2,3,4]));

//Get the last element in an array//
function lastElem(arr){
  return arr[arr.length-1];
}
console.log(lastElem([0,1,2,3,4]));

//Find the sum of an Array //
function arrSum(arr){
  let sum =0;
  for (let i = 0; i < arr.length; ++i){
  sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2,2,2,3,5,6,7,8]));
console.log(arrSum([100,200,500]));
console.log(arrSum([0,-5,-10]));

//Add up the numbers from a single number//
function progressiveSum(num){
  let sum = 0;
  for (let i = 1; i <= num; ++i){
    sum = sum + i;
  }
  return sum;
}
console.log(progressiveSum(5));
console.log(progressiveSum(2));

//Calculate the time, given a number in seconds, return this number in mm:ss format.//
console.log(1111111111111111);
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  console.log(timerMinutes)
  let timerSeconds = seconds % 60;
  console.log(timerSeconds)

if(timerMinutes.toString().length === 1){
    timerMinutes = '0' + timerMinutes

if(timerSeconds.toString().length === 1) {
    timerSeconds = '0' + timerSeconds
}
}

return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));


let timerMin = 2;
if (timerMin.toString().length === 1) {
  timerMin = '0' + timerMin
}else {
  timerMin = timerMin;
}
console.log(timerMin);

//Find the largest number, Given an array of numbers, return the largest number of that array//

function getMax(arr) {
  let max = arr[0]
  for ( let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i]
    }
   return max;
}
}
console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));


// Reverse a string, Given a string, return the reversed string //
// Three methods - use an incrementing for loop, an derementing for loop, the array reverse property//
//Method 1//

function reverseString(str) {
  let reversedString = '';
  //Method 1//
  //this is how you loop through every character in a string//
  for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;
  }
    
    return reversedString;

  }
  console.log(reverseString('abc'));

  //Method 2 //
  function reverseString(str){
    let reversed2String = '';
    for (let i = str.length -1; i >= 0; --i) {
      reversed2String += str[i];
    }
      return reversed2String;
    }
  

   //Method 3 //
//Note: you can only reverse an array it has an reverse property //
// 'abc'.split('')
//     (3) ['a', 'b', 'c']
// 'abc'.split('').reverse()
//       (3) ['c', 'b', 'a']
// Afterwards, to join use the following:
//    'abc'.split('').reverse().join('')
//    'cba'
  
function reverse3String(str) {
  return str.split('').reverse().join('');
}
console.log(reverse3String('abc'));


console.log(reverseString('abc'));
console.log(reverseString('David'));
console.log(reverseString('This is cool'));

//Turn every element in an array into 0 //
//Given an array of elements, return the same length array filled with 0's//
//Solution 1:
function convertToZeros(arr) {
  for (let i = 0; i < arr.length; ++i ){
    arr[i] = 0
  }
    return arr
  }


//Solution 1a:
function convertToZeros(arr){
  let newArr =[];
  for (let i = 0; i < arr.length; ++i){
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZeros([15 , 100 , 0]));
console.log(convertToZeros([12, 33 , 55]));
console.log(convertToZeros([1 ,2 ,3 ,4 ,5]));

//Soultion 2:
// The array new Array command creates an new empty array of a set number or arr.length, the fill command fills it with zero's //
function convertToZeros1(arr){
  return new Array(arr.length).fill(0);
  }
  
console.log(convertToZeros1([1,2,3,4,5,6,7,8,9,10]))



//Solution 3:
//map lets you map over every element in an array
//[1,2,3].map(elem => elem * 2)
// (3) [2,4,6]
// 
//[1,2,3].map(elem => 'dog')
// (3) ['dog', 'dog', 'dog']
//JavaScript ES6; return arr.map(elem => {return 0};)
// To the right of the => function their is an invisable return

//if your going to return an object {?}
//you need to use the return function {return 0}
// returning just zero:  {0} this will give you undefined

//Solution 1: For Loop
//Solution 2: Array 'fill'
//Solution 3: Array 'map'

function convertToZeros(arr){
  return arr.map(elem => 0);

}
console.log(convertToZeros([1,2,3]));

console.log(convertToZeros([5 , 100 , 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1 ,2 ,3 ,4 ,5]));


//Filter out all the apples, given an array of fruits, if it is an apple remove it from the array.
//Solution 1: For Loop
//Solution 2: Array 'filter'

//Solution 1://
function removeApples(arr){
  let noApples = []
  for (let i = 0; i < arr.length; ++i){
    if (arr[i] !== 'Apple'){
      noApples.push(arr[i]);
    }
  }
  return noApples;
}

console.log(removeApples(['Banana','Orange','Apple']));

//Solution 2://
// If you use curly brackets {} you need to use a return, their is no invisable  return //
// The use of an arr.filter property eg [1,2,3].filter(elem => elem === 3)
//output: [3] We're going thru the arry and only adding the elememt to the array if the element is equal to 3
//function removeApples(arr){return arr.filter(elem =>{ return elem === Apple})}
// vs
//return arr.filter(elem => elem !== 'Apple')
function removeApples1(arr){
  return arr.filter(elem => elem !== 'Orange');

}
console.log(removeApples1(['Banana', 'Orange', 'Apple', 'APPLE']));


//Filter out all the falsy values, Given an array of values, filter out all the falsy values and only return the truthy values.
//Solution 1: For Loop
//Solution 2: Array 'filter'
//Solution1// 



function filterOutFalsy(arr) {
  let truthyarr = [];
  for (let i = 0; i < arr.length; ++i){
    if (arr[i] == true){
      truthyarr.push(arr[i]);
    }
  }
  return truthyarr;
}

console.log(filterOutFalsy([0,1,1,0,null, undefined, 1]));


//Solution2//

function filterOutFalsy9(arr){
  return arr.filter(elem => !!elem == false);
}
/*
console.log(filterOutFalsy9(['',1,3, NaN, undefined, null, false, 0]));
*/

console.log(filterOutFalsy9(["",[],0,null,undefined,1,"1"]));
console.log(filterOutFalsy9(["Tomato", 'Orange', 'Banana', false, true]));
console.log(filterOutFalsy9(['Banana', 'Orange','Apple']));



//Truthy to ture, Falsy to false, Given an array of truthy and falsy values, return the same array of elements into its boolean value.
//When you want to convert anything into another, use MAP, for example [1,2,3,].map(elem => 'dog')
// output: (3) ['dog', 'dog', 'dog']

function convertToBoolean(arr){
  return arr.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0, "David", "", []]));


