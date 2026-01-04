// Object Literals

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@exmaple.com",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
};

console.log(user);
console.log(user.name);

// overwrite age

// user.age = 35
console.log(user.age);

//we can also use sqyare brackets instead of dot notation 
console.log(user["email"]);

user["name"] = "sachin";
console.log(user["name"]);

//checking the type of user
console.log(typeof user)
