"use strict";
// Type Definations and Axios in Typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Axios -- web request library as like we use fetch
const axios_1 = __importDefault(require("axios")); /// this shows functionality
const fetchData = async () => {
    try {
        const response = await axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.log("Axios Error", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
//   npm i some-library  --- to install some library 
//  npm i -D @types/some-library
// .d.ts 
//# sourceMappingURL=webReq.js.map