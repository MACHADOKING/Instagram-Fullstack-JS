require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve cors
app.use(
  cors({ credentials: true, origin: "https://reactgram-fullstack.vercel.app" })
);

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB collection
require("./config/db.js");

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
