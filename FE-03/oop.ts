// Object Oriented Programming

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
  public flavor: string = "masala";

  private secretIngredients = " cardamom";

  reveal() {
    return this.secretIngredients; // ok
  }
}

class Shop {
  protected shopName = "Chai corner";
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
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// use of getter and setter(to get and set  the value used in private classes)
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");

    this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 3;

// ---------------- Static Members ------------------

class EkChai {
  static shopName = " Chaicode cafe";

  constructor(public flavor: string) {}
}

console.log(EkChai.shopName);

// ---------- Abstract Classes ----------

abstract class Drink {
  abstract make(): void;
}


class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}

// ---- Composition ----------
class Heater {
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}