const blog_index = (req, res) => {
    res.render("index", {title: "home"});
};


module.exports = {blog_index,}