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
// console.log("Hello bacho!");
// }, 12000);
// console.log("Hello bacho!2");

// js is not asynchronous
// as we know that js is an syncronous language because it executes the code line by line coz it is interpreted language

// console.log("hello1");
// console.log("hello2");
// setTimeout(() => {
//     console.log("hello3");
// }, 0);
// console.log("hello4");
// it will print like 1,2.4,3 because of the side stack the async function will move to the side stack and after the the excution of main stak it calls the

// async ki poori kahani
// single threading vs multiple threads
// single thread mtlb ek time pe sirf ek time pe ek hi line execute hoogi and multi thread is like multi tasking which allow us execute multiple lines simultaneously.

// callbacks
// callback function woh funcion hoote hai jinko hum thode time ke baad waapis call back kiya jaata hai !

// then catch callback async await //[it gives us the request]

// in this print is the call back function which is called after a certain time when it is called again.
// setTimeout(() => {
// print(); //callback function called.
// }, 5000);

// function print() {
// console.log("Hello bacho!2");
// }

// async code likhne ke liye
// to call something
// fetch
// axios
// XMLHttpRequest
// setTimeout
// setInterval

// to get output of something.
// callback
// then catch async await

// promises
// promises is like the real life entity in which there are majorly 3 states resolve reject and pending.

// let num = new Promise((res, rej) => {
//   if (!true) {
//     res();
//   } else {
//     rej();
//   }
// });

// num
//   .then((res) => {
//     console.log("Hogya");
//   })
//   .catch((rej) => {
//     console.log("Nhi Hua");
//   });

// user will ask for a nuber bet 0-9 if the number is below 5 reslve if not reject
// let num = 7;
let ans = new Promise((res, rej) => {
  var num = Math.floor(Math.random(0, 1) * 10);
  console.log(num ,"num");
  if (num > 5) {
    res();
  } else {
    rej();
  }
});

ans
  .then((res) => {
    console.log("badaa hai");
  })
  .catch((rej) => {
    console.log("chota hai");
  });
// then and catch
// try and catch
// async await
