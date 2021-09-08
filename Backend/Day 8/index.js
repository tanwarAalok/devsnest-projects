const express = require('express');
const app = express();

//CRUD -> POST, GET, PUT, DELETE
app.get('/', (req, res) => {
    res.send("HELLO");
})

app.use(aut);

app.get('/User', (req, res) => {
    res.send("User entered");
})

app.get("/customer", (req, res) => {
    res.send("customer here!")
})

function aut(req, res, next) {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.send("no auth");
    }
}



app.listen(3000);