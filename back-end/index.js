const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let resources = [];

app.get("/resources", (req, res) => {
  res.json(resources);
});

app.post("/resources", (req, res) => {
  const newResource = req.body;
  resources.push(newResource);
  res.status(201).json({ message: "Resource added" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
