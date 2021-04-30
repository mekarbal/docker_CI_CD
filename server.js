const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(data);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = data.find((item) => item.id === id);
  res.status(201).send(user);
});

app.listen(3000, () => console.log("server is running"));
