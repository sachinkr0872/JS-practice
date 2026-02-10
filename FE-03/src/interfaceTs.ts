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

// ---------- Union(Literal) Type -------

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}

// ------ Intersection Type ------

type BaseChai = {teaLeaves: number }
type Extra = { masala: number}

type MasalaChai1 = BaseChai & Extra

const cup: MasalaChai1 = {
    teaLeaves: 2,
    masala: 1
}

// Optional Values

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Sachin"}
const u2: User = {username: "Sachin", bio: "Engineer"}

// ReadOnly values

type Config = {
    readonly appName: string;
    version: number
}

const cfg: Config = {
   appName: "MasterJi",
   version: 2.0
}

// cfg.appName = "ChaiCode"   // can't changeable