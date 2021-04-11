const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//Connection with Database
require("./db/conn");
//PORT
const port = process.env.PORT || 3000 ;

//MiddleWares
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

//Import Routes
const usersRoutes = require("./routes/users");

app.use("/users", usersRoutes);


//ROUTES
app.get("/", (req, res)=>{
    res.send("We are on Home.");
});


//SERVER START
app.listen(port, ()=>{
    console.log(`Server Connection Success at port: ${port}`);
});