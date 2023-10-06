const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = 3001;

app.use(express.json());

mongoose.connect('mongodb+srv://annelise:TYWtS0q5Jodrrtr3@cluster0.ioa0qad.mongodb.net/bucket_list?retryWrites=true&w=majority')

app.listen(PORT, () => {
  console.log(`Now listening at localhost:${PORT}`)
})