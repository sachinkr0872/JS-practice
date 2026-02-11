// ---------------- Union & Any -----------------------

// ------- Unions --------

let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error";

apiRequestStatus = "error";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";
airlineSeat = "window";

// ---------- Use of Any and how to avoid it
const orders = ["12", "20", "24", "40"];
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "24") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}

console.log(currentorder);
