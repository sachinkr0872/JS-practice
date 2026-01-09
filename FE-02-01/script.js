// --------------------Object Literals----------------------//

// ---------Math Object-----------

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));      // round method 
console.log(Math.floor(area));      // floor method 
console.log(Math.ceil(area));      // ceil method 
console.log(Math.trunc(area));      // trunc method 




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
// //     ------- using --this-- keyword
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
// user.show(); //--- Sachin

// function test() {
//   console.log(this);
// }
// test(); // ----window (non-strict)

// user.login();
// user.logout();

// const name = "sachin";
// name.toUpperCase();

// console.log(user);
// console.log(user.name);

//---- overwrite age

// user.age = 35
// console.log(user.age);

//----we can also use square brackets instead of dot notation
// console.log(user["email"]);

// user["name"] = "sachin";
// console.log(user["name"]);

//-----checking the type of user
// console.log(typeof user)
