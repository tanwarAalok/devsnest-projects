const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Users = require('./models/users');

mongoose
  .connect("mongodb://localhost:27017/userData")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION FAILED!!!");
    console.log(err);
  });



app.get('/users', async (req, res) => {
  const user = req.query.name;
  const data = await(Users.find({name: {$regex: user, $options: '$i'}}))
  res.send(data);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});