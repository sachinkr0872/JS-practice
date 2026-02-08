// --------- Type Aliases and Interface ----------

type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// ------ use of interface ( interface are more suitable and used with classes ) --------
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response1 = { ok: true } | { ok: false };
// class myRes implements Response {
//   ok: boolean = true;
// }

// ---------- Union Type -------

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}
