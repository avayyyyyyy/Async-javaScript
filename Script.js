// Sync Ascync me kya fark hoota hai ?
// sync me ek ke baad ek kaam hoota hai jab tak ek command execute nhi hooga dusra start nhi hooga, pr async me koi bhi kaam kabhi bhi ho sakta hai!

// task a = 5;
// task b = 2;
// task c = 15;
// task d = 1;

// kaise pata chalta hai ki code sync hai yaa async ?
// if you are using any of these in your code then your code is asynchronous :
// 1. setTimeout
// 2. setInterval
// 3. fetch
// 4. axios
// 5. Promise
// 6. XMLHttpRequest

// async js hai kya ?
// kai baar hamren saath aisa hoota hai kki hume nhi pta hoota ki servr se info hamare pas kah tak ayegi....toh uss case me hum sync js use mhi kr sakte isse nipatne ke liye hum og async code likh dete hai taaki blocking naa ho and jabh bhi ans aaye hamara answe ke respect me chalne waaala code chal jaaye!!!

// now the following line will execute after 2sec.
// setTimeout(() => {
//   console.log("Hello bacho!");
// }, 12000);
// console.log("Hello bacho!2");

// js is not asynchronous
// async ki poori kahani
// single threading vs multiple threads

// callbacks
// callback function woh funcion hoote hai jinko hum thode time ke baad waapis call back kiya jaata hai !

// in this print is the call back function which is called after a certain time when it is called again.
setTimeout(() => {
  print(); //callback function called.
}, 5000);

function print() {
  console.log("Hello bacho!2");
}
// promises
// then and catch
// try and catch
// async await
