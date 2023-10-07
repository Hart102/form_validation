const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { register, login } = require("./controller/user");

// Middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.put("/api/register", register);
app.post("/api/login", login);

app.listen(5000, () => console.log("App running on port 5000"));
