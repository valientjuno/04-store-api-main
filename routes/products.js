const express = require("express");
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");
const router = express.Router();

require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
