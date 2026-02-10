"use strict";
// Object Oriented Programming
Object.defineProperty(exports, "__esModule", { value: true });
// class Chai {
//   flavour: string;
//   price: number;
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     console.log(this)
//   }
// }
// const masalaChai = new Chai("Ginger", 20);
// masalaChai.flavour = "masala";
// ---------------- Access Modifier -------------------
class Chai {
    flavor = "masala";
    secretIngredients = " cardamom";
    reveal() {
        return this.secretIngredients; // ok
    }
}
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //OK
    }
}
//  -------  Private
class Wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// use of getter and setter(to get and set  the value used in private classes)
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const c = new ModernChai();
c.sugar = 3;
// ---------------- Static Members ------------------
class EkChai {
    flavor;
    static shopName = " Chaicode cafe";
    constructor(flavor) {
        this.flavor = flavor;
    }
}
console.log(EkChai.shopName);
// ---------- Abstract Classes ----------
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing Chai");
    }
}
// ---- Composition ----------
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=oop.js.map