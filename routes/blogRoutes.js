// import the Express module...
const express = require("express");

// importing the controller file to enable the use of functions for response to user requests...
const blogsController = require("../controllers/blogsController");

// creating a router from the Express module...
const router = express.Router();

// importing express middlewares
router.use(express.static("public"));
router.use(express.urlencoded({ extended: true }));

// creating a default route to get home page...
router.get("/", blogsController.get_index);

// handling the /create request (URL) from the browser...
router.get("/create", blogsController.get_create);

// handling the Post request for forms whenever the user submits a new blog...
router.post("/create", blogsController.blog_create_post);

// handling the Get request for the Blog Details page...
router.get("/:id", blogsController.get_blog_details);

// handling a delete request for blogs with the unique id of each blog...
router.delete("/:id", blogsController.blog_delete);

module.exports = router;
