const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let students = [];

app.get("/students", (req, res) => res.json(students));

app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Added");
});

app.listen(3000, () => console.log("Server running"));
