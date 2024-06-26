console.log(document.querySelector('.title__name').style.color = 'blue');
console.log(document.querySelector('h1'));

document.querySelector('#title').innerHTML='Frontend Simplified'
  document.querySelector("#title").style.fontSize = '48px'

  function changeTitleToRed() {
    document.querySelector("#title").style.color = 'red'
    console.log('clicked')

  }
  document.querySelector('.title__name').style.color = 'blue'

  //To access a class element use a . Otherwise to access an ID use a #//
  
//adding two numbers//

  function sumOfTwoNumber(num1 , num2) {
    let c = num1 + num2
    return(c)
  }


  console.log(sumOfTwoNumber( -5,1));
  console.log(sumOfTwoNumber(20, 3));


// converts hours into seconds//

  function hoursIntoSeconds (hours) {
    let seconds = hours * 60 * 60;
    return(seconds);
}

console.log(hoursIntoSeconds(24))

// calculates Perimeter 2* width+length//

function calcPerimeter(length, width){
  let perimeter = 2 * (length + width);
  return(perimeter)
}
console.log(calcPerimeter(30 , 30));

// calculates area of a triangle //

function calcAreaOfTriangle(base, height) {
  let area = (.5 * (base * height));
  return(area);
}

console.log(calcAreaOfTriangle(20 , 20))

//Extend a String//

function appendFrontend(string){
  return string + 'Frontend'
}
console.log(appendFrontend('Apple'));
console.log(appendFrontend('Banana'));

//Greater than 100 //
//This is a condense format it evaluates to see if num1 + num2 is greater than 100, if so it is true, otherwise it is false
//

function greaterThanAhundred( num1 , num2){
 return num1 + num2 >= 100
  }
  console.log(greaterThanAhundred(90 , 53));

// Less than or Equal to Zero//

function lessThanOrEqualToZero( num ) {
  return num <= 0;
  return false;

}

console.log(lessThanOrEqualToZero(35));
console.log(lessThanOrEqualToZero (-5));
console.log(lessThanOrEqualToZero (0));

//Opposite boolean//

function OppositeBoolean(bool) {
  return !(bool);
}

console.log(OppositeBoolean(false));
console.log(OppositeBoolean(true));

//Is not the number 0//

function isNottheNumberzero(num){
  return (num)!== 0;
}
console.log(isNottheNumberzero(5));
console.log(isNottheNumberzero(0));
console.log(isNottheNumberzero(1));


// Calculate the remainder //

function calcTheRemainder( num1 , num2 ){
  return num1 % num2;
}
console.log(calcTheRemainder(4 , 2));
console.log(calcTheRemainder(7 , 8));
console.log(calcTheRemainder(9 , 8));


//Is the number odd? //
function isTheNumberOdd(num){
  return (num) % 2 == !0;
}

console.log(isTheNumberOdd(1));
console.log(isTheNumberOdd(2));
console.log(isTheNumberOdd(3));


//if a number is even, return 1 otherwise return -1 //

function isEven(numa) {
  if ((numa) % 2 == 0){ 
  return 1;
}
return -1;
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(5));

// in one line using a tenery//

//return numa % 2 === 0 ? 1: -1;//


console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(5));


// Check if a user is logged in AND subsribed //

function isLoggedInAndSubscribed(loggedIn , subscribed){
  return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED');
}

console.log(isLoggedInAndSubscribed('LOGGED_IN' , 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN' , 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT' , 'SUBSCRIBED'));


//Check if a user is logged in OR subscribed //

function isLoggedInOrSubscribed(loggedIn1 , subscribed1){
  return (loggedIn1 === 'LOGGED_IN1') || (subscribed1 === 'SUBSCRIBED1');
}
 
console.log(isLoggedInOrSubscribed('LOGGED_IN1' , 'SUBSCRIBED1'));
console.log(isLoggedInOrSubscribed('LOGGED_IN1' , 'UNSUBSCRIBED1'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT1' , 'SUBSCRIBED1'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT1' , 'UNSUBSCRIBED1'))