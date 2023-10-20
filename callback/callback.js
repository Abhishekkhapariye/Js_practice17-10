// const hello = require("./function_practice");

// const prompt = require("prompt-sync")({sigint: true});

// // synchronous

function someLongRunningFunction() {
    let start = Date.now();
    console.log(start)
    while (Date.now() - start < 5000) {
        // do nothing
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');

// Ashynchronous

 console.log("start")

setTimeout(function (){
    console.log("hii after 2 sec!!")
},2000)

console.log("dont wait")
console.log("stop")

// Ashynchronous with callback don't wait for next line of code to execute after 3 sec execute function get execute

function execute(callback){
    setTimeout(()=>{
    const data = {name: "Abhishek",age:22}
    callback(data)
},3000)}

execute(function(data1){
    console.log(data1)
});
console.log("Data Fetched")





  // async  test = ()=>{
  // return 'Hello';
  // }

  // test().then((value)=>{
  //   console.log(value);
  // }).catch((err)=>{
  //   console.log({err})
  // })


// console.log("start");
// setTimeout(function(){
//   console.log("message after 2 sec");

// },2000);
// console.log("stop");


