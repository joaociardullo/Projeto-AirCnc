const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect('mongodb+srv://joao:joao@omnisteck-xnmvo.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//GET, POST, PUT, DELETE

//req.query = acessa query params (para filtros)
//req.params = acessa route params (para edição e delete)
//req.bady = acessa o corpo da requisição (para criação e edição de registros)
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);