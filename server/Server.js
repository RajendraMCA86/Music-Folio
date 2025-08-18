const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = "./ratings.json";

// Fetch ratings
app.get("/ratings", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data || "[]"));
  });
});

// Save rating
app.post("/ratings", (req, res) => {
  const { rating } = req.body;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    let ratings = JSON.parse(data || "[]");
    ratings.push(rating);

    fs.writeFile(FILE_PATH, JSON.stringify(ratings, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error saving file" });
      res.json({ success: true, ratings });
    });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
