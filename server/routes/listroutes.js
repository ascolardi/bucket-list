const express = require("express");
const app = express();
const ListModel = require("../models/Listitems")

app.get("/listitems", async (req, res) => {

  await ListModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })

})

app.post("/listitems", async (req, res) => {

  const listitem = req.body;
  const newListItem = new ListModel(listitem);
  await newListItem.save();

  res.json(newListItem);

})