// importing the express module
const express = require("express");

// importing the Mogoose module...
const mongoose = require("mongoose");

// initializing the express module...
const app = express();

// importing the Morgan module...
const morgan = require("morgan");

// importing the external Router() and route file
const blogRoute = require("./routes/blogRoutes");

// Connect to MongoDB Database
const dbURL =
  "mongodb+srv://UserOlla:User6243@nodedb.ybjrr9v.mongodb.net/myblog-db?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then(
    (result) =>
      //listen on a certain port...
      app.listen(4000),
    console.log("DB Connection Succesful")
  )
  .catch((err) => console.log(err));

// setting the view engine to EJS view engine
app.set("view engine", "ejs");

// importing express middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());

// using the external Router() and route file in the server
app.use("/blogs", blogRoute);

// redirecting users to the homepage at the first attempt to load a page
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// rendering the About page when users visit the /about URL
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// rendering the 404 page whenever the user visits a link that is not available on the blog
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" });
});
