const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getPosts);
router.post("/create", postController.createPost);
router.get("/delete/:id", postController.deletePost);
router.get("/edit/:id", postController.showEditForm);
router.post("/update/:id", postController.updatePost);

module.exports = router;
