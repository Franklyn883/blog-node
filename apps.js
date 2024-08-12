//imports
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoute");
require("dotenv").config();
const app = express();
const dbURI = process.env.dbURI;
app.use(express.urlencoded({ extended: true }));
app.use(blogRoutes);
console.log("connecting to database!!!")
mongoose
    .connect(dbURI)
    .then(() => {

        console.log("connected to database!!!");
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
//include the view engine
app.set("view engine", "ejs");
//set static files
app.use(express.static("public"));


