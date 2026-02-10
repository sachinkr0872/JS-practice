"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala", 20);
function getChaiPrice() {
    return 200;
}
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
// -------- Logger function(used in databases)
function logChai() {
    console.log("Chai is ready");
}
// ----------- Optional and default parameter
// function orderChai(type?: string) {}
function orderChai(type = " Masala") { }
function createChai(order) {
    return 4;
}
//# sourceMappingURL=func.js.map