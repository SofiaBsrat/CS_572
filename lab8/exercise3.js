const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const VERILL_LOCATION = [-91.969179, 41.015748];
const CENTRAL_PARK_LOCATION = [-91.963748, 41.007043];

const app = express();
let db;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  db
    .collection("lab8")
    .find({ location: { $near: VERILL_LOCATION } })
    .toArray((err, data) => {
      res.send(data);
    });
});

app.post("/", (req, res) => {
  const { name, category, lng, lat } = req.body;

  db.collection("lab8").insert({
    _id: `${lng}${lat}`,
    name,
    category,
    location: [lng, lat]
  });

  res.end("Successful!");
});

MongoClient.connect(
  "mongodb://localhost:27017/test",
  async (err, client) => {
    if (err) throw err;

    db = client.db("test");

    db.collection("lab8").createIndex({ location: "2d" });

    app.listen(8000);
  }
);
