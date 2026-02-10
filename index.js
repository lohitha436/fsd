const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];   // temporary storage

// Register API
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user: username });
});

// Home API
app.get("/", (req, res) => {
  res.send("User Login System Running");
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
