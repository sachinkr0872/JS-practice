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

//signature define krte h 


interface ChaiRatings {
    [flavour: string] : number
}

const ratings: ChaiRatings = {
    masala : 4.5,
    ginger : 4.5
} 

// ------ Imp--  Merging of interfaces----------

interface User {
    name: string
}
interface User {
     age: number
}

const u: User = {
    name : "Sachin",
    age : 23
}

//-------------  Extending Interfaces------------------

interface A { a: string}
interface B { a: string}

interface C extends A , B {}  


//--------------------------  GENERICS <> ------------------------------

// Its a template like interface and make the code reusable an denoted by <> 

// generics used for making libraries and frameworks

// simple code for understand generics ----

// function func_name <> () [] {}

function wrapInArray <T>(item: T) : T[] {
    return [item]
}

wrapInArray("Coffee")
wrapInArray(23)
wrapInArray({ flavour : "Ginger"})

function pair<A, B>(a: A, b: B): [A, B] {
    return [a,b]
}

pair( " masala", 20)     
pair( " masala", {flavor: "Ginger"})     


// generics me generics types and generics interfaces dono bante h 


// ------Generic Interfaces---------


interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBox1: Box<string> = {content: "10"}

// Real world usecase of Generics are : 1. API responses,  2. Form states of React

interface ApiPromise<T> {
   status: number,
   data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}