// <<<<<<<<<<<<<<<<<<<<<<-------------------      Object Literals        ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// -----------Primitive values => Stores inside Stack(only target-one value change)----------------

// let scoreOne = 50;
// let scoreTwo = scoreOne ;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//-------------Reference values => Stores inside Heap with reference to stack pointers (both values change)----------------

// const userOne = { name: 'sachin' , age: 20 };
// const userTwo = userOne ;

// console.log(userOne, userTwo);

// userOne.age = 30;
// console.log(userOne, userTwo)

// -----------Math Object-------------

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));      // ---round method
// console.log(Math.floor(area));      // ---floor method
// console.log(Math.ceil(area));      // ---ceil method
// console.log(Math.trunc(area));      // ---trunc method

// ---------random numbers -------

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100))     // --- get random numbers between 1 to 100 using -- * 100

// ---------array of object---------
// const blogs = [
//   { title: "why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];

// console.log(blogs);

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@exmaple.com",
//   location: "berlin",
//   blogs: [
//     { title: "why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
//   ],
//     //   --------  method login created
//  //  -------  login(){}  this is also a regular function
//   login: function () {
//     console.log("the user logged in");
//   },

//   logout: function () {
//     console.log("the user logged out");
//   },
// //    -------------- using --this-- keyword-------------------
//   logBlogs: function(){
// console.log(this.blogs);
//       console.log('this user has written the following blogs')
//       this.blogs.forEach(blog => {
//         console.log(blog.title, blog.likes);
//       });
//   }
// };

// user.logBlogs()
// console.log(this)

// let user1 = {
//   name: "Sachin",
//   show() {
//     console.log(this.name);
//   }
// };
// user.show();           //------output =  Sachin

// function test() {
//   console.log(this);
// }
// test();               // ----window (non-strict)

// user.login();
// user.logout();

// const name = "sachin";
// name.toUpperCase();

// console.log(user);
// console.log(user.name);

//--------- overwrite age

// user.age = 35
// console.log(user.age);

//---------we can also use square brackets instead of dot notation
// console.log(user["email"]);

// user["name"] = "sachin";
// console.log(user["name"]);

//-------checking the type of user
// console.log(typeof user)

//  <<<<<<<<<<<<<<<<<<<-----------------    Array Methods (map, filter, reduce)    ---------------------->>>>>>>>>>>>>>>>>>>>>>>

// ------------Map Functions (use to transform{get a new value of each} an array) -----------

// const arr = [5, 1, 2, 3, 6];

// function double(x) {
//   return x * 2;
// }

// function quad(x) {
//   return x * 4;
// }

// function triple(x) {
//   return x * 3;
// }

// const output = arr.map(double);
// const output4 = arr.map(quad);
// const output2 = arr.map(triple);

// //   ----------we can also write a function inside like this called a higher function also and also like this arrow function also .......

// const output3 = arr.map( (x) => x.toString(2) ) ;
//    //  const output3 = arr.map( function binary(x) {
//   // return x.toString(2);
//  // });

// console.log(output, output2, output3, output4);

// ---------------  Filter Functions ( use to filter the value inside the array) -----------

// const arr = [5, 1, 2, 3, 6];

// function isEven(x){
//     return x % 2 === 0;
// }
// const output = arr.filter( (x) => x % 2 );     //--- easy our code by using arrow function ....
// const output2 = arr.filter(isEven);

// console.log(output, output2);

// ----------------- Reduce Functions (used where ) -------------

const arr = [5, 1, 2, 3, 6];

// sum of max

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));



 const output = arr.reduce( function (max, curr) {
      if(curr > max){
        max = curr ;
      }
      return max;
 }, 0);

 console.log(output);