/**
 * Converting Temperatures
 * 
 * Celsius-to-Fahrenheit formula:
 * 
 *  F = C * 1.8 + 32
 * 
 

let clesius = 10
let fahrenheit = (clesius * 1.8 + 32)

console.log(fahrenheit)


let subscribed = false
let loggedIn = true

if (subscribed === true) {
  console.log('show the video')
}
else if (loggedIn === true) {
  console.log('tell the user to upgrade their subscription')
}

else {
  console.log('tell user to log into account')
}


let cash = 55
let price = 50

let change = (cash - price)
if (cash > price) {
  console.log(`you paid extra - here's ${change} dollars change`)

}
else if (cash === price) {
  console.log('you paid the exact amount, have a nice day!')

}
else {
  console.log(` not enought money- you still owe ${change} dollars`)
}


let cash1 = 50
let price1 = 40

let isStoreOpen = true

cash1 >= price1 && isStoreOpen ? console.log('give receipt') : consolelog('do not give a receipt')
// 'give receipt' : do not give receipt'//


let count = 1
while (count <= 100) {
  console.log(count)
  count = count +1;
}


let counter = 1
for (counter) <= 100;
console.log('counter')


*/
/** 
// //
// for (let i = 1; i <= 20; ++i) {
//   if (i % 3 === 0)
//   console.log("Frontend");
//   else if (i % 5 === 0)
//     console.log("Simplified")
//   else if (i % 3 && i % 5 == true)
//     console.log("Frontend Simplified")
//       else (i % 3 && i % 5 == false)
//         console.log(i) }
// //

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}
*/
/** 
const str = "Frontend Simplified";
for (let i = 0; i < str.length; ++i) {
  console.log(str[i]);
}

function CelsiustoFehrenheit(C) {
  let F = C * 1.8 + 32;
  return F;
}

console.log(CelsiustoFehrenheit(60));

function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(convertCelsiusToFahrenheit(60));

/**
 * second type of function
 * const convertCelsiusToFahrenheit = (celsius) => {
 *  return celsius * 1.8 + 32
 * }
 *
 * console.log(convertCelsiusToFahrenheit(0))
 */

/** 
let arr = [20, 30, 40, 50, 100];
let newArr = arr.filter((element) => {
  console.log(element);
  return true;
});

let new1Arr = arr.filter((element) => element < 50);
console.log(new1Arr);

let grades4 = ['A+', 'A', 'FAIL']
let grades8 = ['FAIL', 'FAIL', 'B']
let grades5 = ['FAIL']

let new2Arr = grades.filter((element)=> element !== 'FAIL')
console.log(new2Arr)

*/
/** 
let grade = ['A+','A', 'FAIL']

let goodGrades = []

for (let i=0; i < grade.length; ++i) {
  if (grade[i] !== 'FAIL'){
    goodGrades.push(grade[i]);
  }
}
console.log(goodGrades);




let array1 = [1,5,10,3]
let newArray = array1.map((element) => {
  return element * 100
})
console.log(newArray)

/**
 * one line statement = let newArray = array1.map(element => element* 100)
 * console.log(newArray)
 */

/*
let dollars = [1,5,10,3];
let cents = [];
for (let i = 0; i < dollars.length; ++i) {
 cents.push(dollars[i] * 100);
}
console.log(cents);
*/
/**
 * The above example is the same as the one using the map function,
 * This one uses a for loop
 */

/**
 * objects used to store multiple properties in on variable.
 *
 *
 */

/** 
let users = [
  {
    username: 'Hector',
    email:'hector.altamira1@gmail.com',
    subscription:'VIP',
    discordId: 'Hector Altamira#0001';
    password: 'test123',
    lessonsCompleted:[ 0, 1, 2, 3]
  
  },
  {
    username: 'John',
    email:'John.altamira1@gmail.com',
    subscription:'VIP',
    discordID: 'John Altamira#1111',
    password: 'john123',
    lessonsCompleted:[ 0, 1, 0, 3]
  }
];

console.log(users[0]);
console.log(users[1]);

console.log(users[1].username);
console.log(users[0].email);
console.log(users[1].subscription);
console.log(users[0].lessonsCompleted);

console.log(users[0].lessonsCompleted.map(element => element *2))

function login(email, password) {
  for (let i = 0; i < users.length; ++i)
  console.log(users[i]);
}



function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log('log the user in - the details are correct')
      }
      else {
        console.log('password is incorrect - try again')
      }
      return;
    }
  }
  console.log('could not find an email that matches')
}

login('hector.alstamira1@gmail.com', 'texst123')

*/
/*
let users = [
  {
    username: "Hector",
    email: "hector.altamira1@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordID: "Hector Altamira#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "John",
    email: "John.altamira1@gmail.com",
    password: "john123",
    subscriptionStatus: "VIP",
    discordID: "John Altamira#1111",
    lessonsCompleted: [0, 1, 0, 3],
  },
];
function register(user){
  users.push(user);
}


register({
  username: "zen",
  email: "zen@frontendsimplified.com",
  password: "zen123",
  subscriptionStatus: "VIP",
  discordID: "Zen#0001",
  lessonsCompleted: [0, 1]
});


/**querySelector is the most popular way to access an element
 * use a . to access a class 
 * use a # to access a id
 */

/*
/** 
console.log(users);
console.log(document.querySelector('#title'));


console.log(document.querySelector('.title').innerHTML = 'Frontend Simplified');
*/
/** 
document.querySelector(".title").innerHTML = "Frontend Simplified"

document.querySelector(".title").sytle.fontSize = '16px'


function changeTitleToRed() {
  document.querySelector(".title").style.color = 'red'
  console.log('clicked');

}

console.log(document.querySelector('#title'));
*/





/**
function changeTitleToRed() {
  document.querySelector(".title").style.color = 'red'
  console.log('clicked') */

  document.querySelector('#title').innerHTML='Frontend Simplified'
  document.querySelector("#title").style.fontSize = '48px'

  function changeTitleToRed() {
    document.querySelector("#title").style.color = 'red'
    console.log('clicked')

  }
  document.querySelector('.title__name').style.color = 'blue'