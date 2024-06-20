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
// //
// for (let i = 1; i <= 20; ++i) {
//   if (i % 3 === 0)
//   console.log("Frontend");
//   else if (i % 5 === 0)
//     console.log("Simplified")
//   else if (i % 3 && i % 5 == true)
//     console.log("Frontend Simplified")
//       else (i % 3 && i % 5 == false)
//         console.log(i)

//     }
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
