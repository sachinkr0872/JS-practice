// --------- Arrays , ENums and Tuples -------------

const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

// ---------- Array Of Objects-------------
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];

// -------------- Read only Array (we can define an array bu cant modify them ) --------------------------

const cities: readonly string[] = ["Delhi", "Jaipur"];
// cities.push("Pune")

// ------------------ Multi-Dimensional Array ----------------------

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// ------------ Tuples ------- is same like array but have some restrictions

let chaiTuple: [string, number];
chaiTuple: ["Masala", 20];

let userInfo: [string, number, boolean?];
userInfo: ["Sachin", 10000000];
userInfo: ["Sachin", 10000000, true];
