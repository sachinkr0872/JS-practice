"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let tea;
tea = {
    name: "Ginger Tea",
    price: 23,
    isHot: true,
};
const adrakChai = {
    name: "adrak chai",
    price: 25,
    ingredients: ["ginger", "milk", "tea leaves"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u1 = {
    username: "ChaiCode",
    password: "123",
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: true });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: " Masala Chai",
    quantity: 2,
});
const ChaiInfo = {
    name: "Lemon Tea",
    price: 10,
};
//# sourceMappingURL=object.js.map