//Show rating, Given a rating, display a (*) for each full rating and a full-stop(.) for each half rating.

//Solution Part:
// Create an empty string first, then loop thru a ratiing  loop adding a star to the emtpy string...

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
      } else { ratings = ratings + " ";}
    }
    if (!Number.isInteger(rating)) {
      ratings += ".";
    }
    return ratings;
  }


console.log(showRating(3.0));
console.log(showRating(4.5));
console.log(showRating(0.5));

//Sort by lowest to hightest price, Given an array of numbers, return the prices sorted by low to high.

function sortLowToHigh(numbers) {
  let sorted = "";
  return numbers.sort((a,b) => a -b);

}

console.log(sortLowToHigh([20,40,10,30,50,10]));
console.log(sortLowToHigh([5,10,0,-5]));
console.log(sortLowToHigh([3,2,1,0]));


// Sort by highest to lowest price, Given an array of objects, return the prices sorted by high to low.
// Get the property name that you are iterating over, in this case it is price.
function sortHighToLow(numbers){
  return numbers.sort((a, b) => {
    //return b.price - a.price
    return b.id - a.id
  });

}
console.log(
sortHighToLow([
  {id: 1, price: 50 },
  {id: 2, price: 30 },
  {id: 3, price: 60 },
  {id: 4, price: 10 },
])
); 
//Watch Promises videos
//The Async Await Episode I Promised  -Fireship
//The Async Await JavaScript ES7 - Techsith (1.5x Speed)
//Async JS Crash Course - Callbacks, Promises, Async Await - Travsery Media (1.5x Speed)

//Find all the posts by a single user, Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.

async function postsByUser(userId){
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await promise.json()
  const posts = result.filter(element => element.userId === userId)
  console.log(posts)
}
postsByUser(4);






//First 6 Incomplete Todos
//Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.
//Slice has first parameter start, second parameter end

async function firstSixIncomplete(completed){
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json()
  const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);
  console.log(incompleteTasks);
}

firstSixIncomplete(6);