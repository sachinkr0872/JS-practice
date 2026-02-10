function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 20);

function getChaiPrice(): number {
  return 200;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// -------- Logger function(used in databases)
function logChai(): void {
  console.log("Chai is ready");
}

// ----------- Optional and default parameter

// function orderChai(type?: string) {}

function orderChai(type: string = " Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
