// importing the Mongoose module...
const mongoose = require("mongoose");

// importing the Schema function from the required Mongoose module...
const Schema = mongoose.Schema;

// creating a Schema for the Blogs from the Schema function
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// craeating a Schema model to connect with the DataBase and Collection
const PageBlog = mongoose.model("PageBlogs", blogSchema);

module.exports = PageBlog;
