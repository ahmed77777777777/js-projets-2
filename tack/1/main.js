let x = 10;
function test() {
let x = 20;
console.log(x);
}
test();
console.log(x);
x=10 
// console out of scuop

///////////////////////////////////////////////////////

if (true) {
var a = 1;
let b = 2;
}
console.log(a);
console.log(b);
// a and b undefind
// varbale in a scoup and console log out

///////////////////////////////////////////////////////////


let count = 0;
function increase() {
count = count + 1;
}
function reset() {
let count = 0;
}
increase();
increase();
reset();
console.log(count);
count=0
// varbale in a globl scoup/

///////////////////////////////////////////////////////

function addAndPrint(a, b) {
console.log(a + b);
}
let result = addAndPrint(2, 3);
console.log(result);
result= 5
// result= function and 2=a 3=b