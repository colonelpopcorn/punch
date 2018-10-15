const express = require("express");
const app = new express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.PORT || port, () => { console.log("something!"); }); // eslint-disable-line
