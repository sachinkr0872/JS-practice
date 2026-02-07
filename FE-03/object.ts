const chai = {
  name: "Masala chai",
  price: 20,
  isHot: true,
};

// {
//     name: string;  // in Ts in the end we use semi colons
//     price: number;
//     isHot: boolean
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 23,
  isHot: true,
};

//---------  Types  ALiased objects

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "adrak chai",
  price: 25,
  ingredients: ["ginger", "milk", "tea leaves"],
};

// Structural and duck typing

type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User1 = {
  username: string;
  password: string;
};

const u1: User1 = {
  username: "ChaiCode",
  password: "123",
};

// ----------- Splitting Data Types -------------

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// define a data type in one but use multiple places in object

type Chaii = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chaii>) => {
  console.log("updating chai with", updates);
};

updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({});