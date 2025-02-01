const bodyParser = require("body-parser");
const express = require("express");
const { PORT, MONGODB_URI } = require("./utils/config");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGODB_URI, { dbName: "language-test" })
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });

app.get("/api", (req, res) => {
  console.log(req.body);
  res.send("Hello world!").end();
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "data successfully received" });
});

app.listen(PORT, () => {
  console.log("server started on port: ", PORT);
});
