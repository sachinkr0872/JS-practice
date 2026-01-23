// {1} --------- HOW JS works -------------

// --------- Execution Context --------

// 1st component - Memory or variable environment (key:value , a= 10, fn. ...)

// 2nd component - Code or Thread of Execution (code executed one line at a time )

// JavaScript is a synchronous single-threaded language (execute one command at a time and in a specific order one the first line ended then goes to other )

// ------------------------- How JS Code is Executed ---------------------------------

// 1st phase -- Memory Creation  (gives "undefined" keyword to the variables)
// 2nd phase --  Code Execution ()

// -----------  Call Stack --------------
// diffrent names of call stack are : 1. Execution context stack , 2. Program stack , 3. Control stack , 4. Runtime stack , 5. Machine stack

// global exexcution context is goes into the stack
// Call Stack maintains the order of execution of execution contexts

// ---------------------------  HOISTING in JS (variables and functions)-------------------------------

// hoisting - we can access the variables and function even before we initialized it

// getName();
// console.log(x);

// var x = 7;

// function getName() {
//   console.log("Namaste JavaScript");
// }

// ----------------------------- Functions in JS and Variable environment  ----------------------------------

// var x = 1;
// a();
// b();
// c()
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// function c() {
//   var x = 101;
//   console.log(x);
// }

// ---------------------------------  SHORTEST JS program (window & this keyword)   ------------------------------------------------

// var a = 10;
// var b= 100//  which is on the top is in global space and if something is under a function is not in the global space
// function b() {
//   var x = 10
// }

// console.log(window.a)
// console.log(a)
// console.log(b)
// console.log(this.a)

// -----------------------------------  Undefined and Not Defined in JS ------------------------------------------------------------

// var a = 7; // this is undefined because it allocates memory for "a"

// console.log(x); // this is called not defined because x is not allocated memory

// ---------------------- JS is a Losely or weekly typed(more stronger BTW) language -------------------

// var a;
// console.log(a);

// a = 10;
// console.log(a);

// a = "hello sachin";
// console.log(a);

// ----------------------------------    The Scope Chain -------------------------------------

// --------- scope and lexical environment(in sequence like c() is lexical inside a()) ---------

function a() {
  var b = 10;
  c();
  function c() {
  // console.log(b)
  }
}

a();
console.log(b);
