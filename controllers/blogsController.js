// importing the blogModel file which contains the Schema models to be used...
const myModel = require("../models/pageblog");

const get_index = (req, res) => {
  myModel
    .find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("clients/index", { title: "Home Page", blogContent: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const get_create = (req, res) => {
  res.render("clients/create", { title: "Create a Blog" });
};

const blog_create_post = (req, res) => {
  const getFormData = new myModel(req.body);

  getFormData
    .save()
    .then((result) => {
      console.log("new entry made to the DB");
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
  //   console.log(req.body);
};

const get_blog_details = (req, res) => {
  const getBlogID = req.params.id;

  myModel
    .findById(getBlogID)
    .then((result) => {
      res.render("clients/details", {
        title: "Blog Details Page",
        blogContent: result,
      });
    })
    .catch((err) => {
      res.render("404", { title: "Blog Not Found" });
    });
};

const blog_delete = (req, res) => {
  const getBlogID = req.params.id;

  myModel
    .findByIdAndDelete(getBlogID)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  get_index,
  get_create,
  blog_delete,
  blog_create_post,
  get_blog_details,
};
