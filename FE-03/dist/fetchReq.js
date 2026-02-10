"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
//# sourceMappingURL=fetchReq.js.map