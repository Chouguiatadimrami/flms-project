require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/resources", require("./routes/resource"));
app.use("/api/loans", require("./routes/loan"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
