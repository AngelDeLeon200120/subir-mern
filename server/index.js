const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usemodel = require("./models/user");
const app = express();
const URLDB=require('./config/config');
const PORT =process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Usemodel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

mongoose.connect(
URLDB,
  console.log("coneccion exitosa")
);
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  Usemodel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  Usemodel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.delete('/deleteUser/:id',(req, res) => {
    const id = req.params.id;
    Usemodel.findByIdAndDelete({_id:id})
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  })
app.post("/createUser", (req, res) => {
  Usemodel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

console.log('hola');

app.listen(PORT, () => {
  console.log("escuchando....");
});
