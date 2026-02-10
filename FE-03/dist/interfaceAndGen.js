"use strict";
// Interface - Main work of interface is to give our object or data a shape 
Object.defineProperty(exports, "__esModule", { value: true });
const masala = {
    flavour: "masala",
    price: 30
};
const s = { id: 1, name: "ChaiCode Cafe" };
const apply50 = (p) => p * 0.5;
const machine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    }
};
const ratings = {
    masala: 4.5,
    ginger: 4.5
};
const u = {
    name: "Sachin",
    age: 23
};
//--------------------------  GENERICS <> ------------------------------
// Its a template like interface and make the code reusable an denoted by <> 
// generics used for making libraries and frameworks
// simple code for understand generics ----
// function func_name <> () [] {}
function wrapInArray(item) {
    return [item];
}
wrapInArray("Coffee");
wrapInArray(23);
wrapInArray({ flavour: "Ginger" });
function pair(a, b) {
    return [a, b];
}
pair(" masala", 20);
pair(" masala", { flavor: "Ginger" });
const numberBox = { content: 10 };
const numberBox1 = { content: "10" };
const res = {
    status: 200,
    data: { flavor: "masala" }
};
//# sourceMappingURL=interfaceAndGen.js.map