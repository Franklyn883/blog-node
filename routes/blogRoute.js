const express = require("express");
const {
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
} = require("../controllers/blogController");
// instantiate the express router
const router = express.Router();

router.get("/", home);
router.get("/category/create", create_category_get);
router.post("/category/create", create_category);
router.get("/blog/create", create_blog_get);
router.post("/blog/create", create_blog_post);
router.get("/blog/:id", blog_detail);
router.delete("/blog/:id", delete_blog);
router.get("/blog/update/:id", update_blog_get);
router.post("/blog/:id", update_blog_post);
router.get("/category/:id/posts", post_category)

module.exports = router;
