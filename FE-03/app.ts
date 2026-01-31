// greeting.ts

let name: string = "Sachin";
let age: number = 21;
let isStudent: boolean = true;

function greet(userName: string): string {
  return `Hello Bhai, ${userName}!`;
}

console.log(greet(name));
