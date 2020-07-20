const express = require('express');
const db = require('./Config/connection');
const routes = require('./Routes/routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static("public"));


db.once('open', () => {
 app.listen(PORT, () => {
   console.log("App listening on PORT " + PORT);
 });
});