const { Blog, Category } = require("../models/blogModel");
const express = require("express");
app = express();

const delete_blog = (req,res) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(() =>{
       res.json({redirect:"/"})
    })
    .catch(err =>{
        console.log(err);
        res.status(404).send("Page not found")
    })
}
const blog_detail = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("blog/blog_detail", {
                blog: result,
                title: "blogs"
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("server Error!");
        });
};
const home = (req, res) => {
    Promise.all([Category.find(), Blog.find().sort({createdAt: -1})])

        .then(([categories, blogs]) => {
            res.render("blog/index", {
                title: "home",
                categories: categories,
                blogs: blogs,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error fetching data!");
        });
};

const create_category = (req, res) => {
    console.log("category title: ", req.body);
    const category = new Category(req.body);
    category
        .save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

const create_category_get = (req, res) => {
    res.render("blog/create_category", { title: "create category" });
};

const create_blog_get = (req, res) => {
    Category.find()
        .then((result) => {
            res.render("blog/create_blog", {
                title: "create blog",
                categories: result,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const create_blog_post = (req, res) => {
    console.log("new blog:  ", req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};


module.exports = {
    home,
    create_category,
    create_category_get,
    create_blog_get,
    create_blog_post,
    blog_detail,
    delete_blog
};
