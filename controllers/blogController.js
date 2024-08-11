const { Blog, Category } = require("../models/blogModel");
const express = require("express");
app = express();
app.use(express.urlencoded({extended:true}));

const home = (req, res) => {
    res.render("blog/index", { title: "home" });
};
const create_category_get = (req,res) =>{
    res.render("blog/create_category",{title:"create category"})
}

const create_category = (req, res) => {
    console.log("category title: " , req.body);
    const category = new Category({title: "python"});
    category
        .save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { home, create_category,create_category_get };
