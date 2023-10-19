console.log("javascript with var_let_const");
var a = 45;
var b = "abhi";
var c = null;
var d = undefined;
let e = 66;
const z = 33;


   
    e = 77; // let e=46; exception let can be updated not redeclaired
    a = 78;// var can be updated and redeclaired also within its scope
    // const z = 56; //cannot updated nor redeclaired

// console.log(a);
// console.log(b);
// console.log(e);
// console.log(z);
// console.log(d);

const letters = new Set(["a","b","c"])

letters.forEach(function(value){
    console.log(value)
  
})

// with for in
let iterator = letters.values();
for(let a in iterator){
    console.log(a);
}
