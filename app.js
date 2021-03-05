require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

//DB  Connection

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("ERROR: DB NOT CONNECTED");
  });

//Middlewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes

app.use("/api", authRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a Server

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
