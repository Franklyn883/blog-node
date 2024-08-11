const express = require("express")
const {blog_index} = require("../controllers/blogController")
// instantiate the express router
const router = express.Router()

router.get("/", blog_index);


module.exports = router;