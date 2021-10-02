const express = require('express');
const app = express();

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
  { id: 5, name: "User 5" },
  { id: 6, name: "User 6" },
  { id: 7, name: "User 7" },
  { id: 8, name: "User 8" },
  { id: 9, name: "User 9" },
  { id: 10, name: "User 10" },
  { id: 11, name: "User 11" },
  { id: 12, name: "User 12" },
  { id: 13, name: "User 13" },
  { id: 14, name: "User 14" },
  { id: 15, name: "User 15" },
  { id: 16, name: "User 16" },
  { id: 17, name: "User 17" },
];

app.get('/users', (req, res) => {
    const { page, limit } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const resultUsers = users.slice(startIndex, endIndex);
    res.json(resultUsers);
})

app.listen(3000);



//for request : http://localhost:3000/users?page=1&limit=5
// data from id=1 to 5 will be retrieved

// and for request: http://localhost:3000/users?page=2&limit=10
// data from id=11 to 17 will be retrieved
