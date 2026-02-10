// Type Definations and Axios in Typescript

// Axios -- web request library as like we use fetch

import axios //{ AxiosResponse } 
 from "axios";  /// this shows functionality

 import type{ AxiosResponse } from "axios"; // or we do like this // this shows the type of axios

//first we have to create an interface and define the types of each data and this is very useful in overall journey of TS
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
   try {
      const response: AxiosResponse<Todo> = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
       console.log("Todo", response.data);

   } catch (error: any) {

     if(axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);
         
          if(error.response){
            console.log(error.response.status);
          }
     }

   }
}

//   npm i some-library  --- to install some library 

//  npm i -D @types/some-library

// .d.ts 