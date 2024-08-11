const express = require("express");
const {
    home,
    create_category,
    create_category_get,
} = require("../controllers/blogController");
// instantiate the express router
const router = express.Router();

router.get("/", home);
router.get("/category/create", create_category_get);
router.post("/category/create", create_category);

module.exports = router;
