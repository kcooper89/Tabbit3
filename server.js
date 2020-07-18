const express = require('express');
const mongoose = require('mongoose')
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
 app.listen(PORT, () => {
   console.log("App listening on PORT " + PORT);
 });
});