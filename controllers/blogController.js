const { Blog, Category } = require("../models/blogModel");
const express = require("express");
app = express();

const delete_blog = (req, res) => {
    const id = req.params.id;

    //find and delete blog with the give id
    Blog.findByIdAndDelete(id)
        .then(() => {
            // return json path to the frontend
            res.json({ redirect: "/" });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send("Page not found");
        });
};
const blog_detail = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .populate("category")
        .then((result) => {
            res.render("blog/blog_detail", {
                blog: result,
                title: "blogs",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("server Error!");
        });
};
const home = (req, res) => {
    Promise.all([Category.find(), Blog.find().sort({ createdAt: -1 })])

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

const update_blog_get = (req, res) => {
    const id = req.params.id;

    Promise.all([Blog.findById(id).populate("category"), Category.find()])
        .then(([blog, categories]) => {
            if (blog) {
                res.render("blog/update_blog", {
                    title: "Update blog",
                    blog: blog,
                    categories: categories,
                });
            } else {
                res.status(404).send("Opps! Blog post not found!");
            }
        })
        .catch((err) => {
            res.status(500).send("Server Error");
        });
};

const update_blog_post = (req, res) => {
    id = req.params.id;
    formUpdate = req.body;

    Blog.findByIdAndUpdate(id, formUpdate, { new: true })
        .then((updatedBlog) => {
            res.redirect(`/blog/${updatedBlog._id}`);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Server error");
        });
};


const post_category = (req, res) => {
    id = req.params.id;

    Promise.all([ Blog.find({ category: id })
        .populate("category"), Category.find()])

        .then(([blogs, categories]) => {
            console.log( "From the controller", blogs);
            console.log("From the controller categories:", categories)
            res.render("blog/category", {
                title: "Posts by category",
                blogs: blogs,
                categories: categories,
            });
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
    delete_blog,
    update_blog_get,
    update_blog_post,
    post_category,
};
