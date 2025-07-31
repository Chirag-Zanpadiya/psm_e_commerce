const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { readdirSync } = require("fs");
const { connectDB } = require("./db/connection");

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;

// handling connections err from err
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Server is Running in Port ${port}`);
  console.log(`http://localhost:${port}`);
});

// dynamically rotues
// console.log(readdirSync("./routes"));
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.get("/", (req, res) => {
  res.send("<center><h1>Server Is Running</h1></center>");
});
