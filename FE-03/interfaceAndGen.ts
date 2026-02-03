// Interface - Main work of interface is to give our object or data a shape 


interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavour: "masala",
    price: 30
}

interface Shop{
    readonly id: number
    name : string
}

const s: Shop = { id: 1, name : "ChaiCode Cafe"}

interface DiscountCalculator {
    (price: number): number

}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

//signature define 

interface ChaiRatings {
    [flavour: string] : number
}

const ratings: ChaiRatings = {
    masala : 4.5,
    ginger : 4.5
} 