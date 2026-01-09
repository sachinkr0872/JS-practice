// ---------------=-----Object Literals----------------------//


// array of object
const blogs = [
  { title: "why mac & cheese rules", likes: 30 },
  { title: "10 things to make with marmite", likes: 50 },
];

console.log(blogs);

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@exmaple.com",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
//    method login created
//    login(){}  this is also a regular function
//   login: function () {
//     console.log("the user logged in");
//   },

//   logout: function () {
//     console.log("the user logged out");
//   },
//  using --this-- keyword
//   logBlogs: function(){
// console.log(this.blogs);
//       console.log('this user has written the following blogs')
//       this.blogs.forEach(blog => {
//         console.log(blog)
//       })
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
// user.show(); // Sachin

// function test() {
//   console.log(this);
// }
// test(); // window (non-strict)

// user.login();
// user.logout();

// const name = "sachin";
// name.toUpperCase();

// console.log(user);
// console.log(user.name);

// overwrite age

// user.age = 35
// console.log(user.age);

//we can also use sqyare brackets instead of dot notation
// console.log(user["email"]);

// user["name"] = "sachin";
// console.log(user["name"]);

//checking the type of user
// console.log(typeof user)
