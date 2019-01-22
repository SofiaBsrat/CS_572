const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require('body-parser');

const grades = require("./grades");

const api = express();

api.use(bodyParser.json());
api.use(logger("tiny"));
api.use(cors());

api.get("/", (req, res) => {
  res.json(grades);
});

api.post('/', (req, res) => {
  const { name, course, grade } = req.body;
  grades.add(name, course, grade);
  res.json(grades);
});

api.put('/', (req, res) => {
  const { id, name, course, grade } = req.body;
  grades.update(id, name, course, grade);
  res.json(grades);
});

api.delete('/', (req, res) => {
  grades.remove(req.body.id);
  res.json(grades);
});

api.listen(8000);
