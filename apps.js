//imports
const express = require("express");
const blogRoutes = require("./routes/blogRoute")
const app = express();

//include the view engine
app.set("view engine", "ejs");

//set static files
app.use(express.static("static"));
app.use(blogRoutes)


//listen to request
app.listen(3000);


