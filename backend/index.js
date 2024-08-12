const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;
// console.log(mongoUrl);
app.use(express.json());

// Connecting to MongoDB Database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to ${mongoUrl}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Defining the API routes
app.get("/", (req, res) => {
  res.send("Hello Roxiler Systems!");
});

const transactionRoutes = require("./routes/route");
app.use("/", transactionRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});