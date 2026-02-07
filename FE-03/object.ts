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
    ingredients: string[]
}

const adrakChai : Tea = {
    name : "adrak chai",
    price: 25,
    ingredients: ["ginger", "milk", "tea leaves"]
}

// Structural and duck typing  

type Cup = { size: string}

let smallCup : Cup = {size : "200ml"}

let bigCup = {size : "500ml", material: "steel"}

smallCup = bigCup