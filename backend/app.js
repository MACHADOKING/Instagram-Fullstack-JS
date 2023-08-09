require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const authGuard = require("./middlewares/authGuard");

const port = process.env.PORT || 9001;

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar política de CORS
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://reactgram-fullstack.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(
//   cors({
//     credentials: true,
//     origin: "https://reactgram-fullstack.vercel.app",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

// Solve cors
// app.use(
//   cors({ credentials: true, origin: "https://reactgram-fullstack.vercel.app" })
// );

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB collection
require("./config/db.js");

// routes
const router = require("./routes/Router.js");

router.use(authGuard);

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
