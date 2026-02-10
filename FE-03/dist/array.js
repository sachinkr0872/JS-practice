"use strict";
// --------- Arrays , ENums and Tuples -------------
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
// -------------- Read only Array (we can define an array bu cant modify them ) --------------------------
const cities = ["Delhi", "Jaipur"];
// cities.push("Pune")
// ------------------ Multi-Dimensional Array ----------------------
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
// ------------ Tuples ------- is same like array but have some restrictions
let chaiTuple;
chaiTuple: ["Masala", 20];
let userInfo;
userInfo: ["Sachin", 10000000];
userInfo: ["Sachin", 10000000, true];
//----------  Read only tuples
const location = [14.56, 23.44];
//-----------  Named Tuple
const chaiItems = ["Masala", 25];
// ------------------- Enums(restrict choices of users ) ----------------
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
// Enum auto-increment 
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = " masala";
    ChaiType["GINGER"] = " ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "Chai";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
// const s = Sugars.HIGH
let t = ["chai", 2];
t.push("extra");
//# sourceMappingURL=array.js.map