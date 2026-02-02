// Type Definations and Axios in Typescript

// Axios -- web request library as like we use fetch

import axios from "axios";

axios.get("https://example.com/data")
.then((response) => {
  console.log(response.data);
});
