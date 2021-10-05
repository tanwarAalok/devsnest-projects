const Users = require('./models/users');
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/userData")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION FAILED!!!");
    console.log(err);
  });

const seedUsers = [
  {
    name: "Vinay",
    age: "13",
    gender: "Male",
  },
  {
    name: "Vini",
    age: "14",
    gender: "Male",
  },
  {
    name: "Akash",
    age: "15",
    gender: "Male",
  },
  {
    name: "Asha",
    age: "13",
    gender: "Female",
  },
  {
    name: "Aarti",
    age: "14",
    gender: "Female",
  },
  {
    name: "Aditi",
    age: "15",
    gender: "Female",
  },
  {
    name: "Aarav",
    age: "16",
    gender: "Male",
  },
  {
    name: "Dhruv",
    age: "17",
    gender: "Male",
  },
  {
    name: "Tanwar",
    age: "18",
    gender: "Male",
  },
  {
    name: "Laxmi",
    age: "20",
    gender: "Female",
  },
  {
    name: "Alia",
    age: "17",
    gender: "Female",
  },
  {
    name: "Shraddha",
    age: "19",
    gender: "Female",
  },
  {
    name: "Krishna",
    age: "29",
    gender: "Male",
  },
];

Users.insertMany(seedUsers)
    .then(res => {
    console.log(res)
    }).catch(e => {
    console.log(e)
})