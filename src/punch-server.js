const express = require("express");
const Common = require("./util/Common");
const app = new express();
const port = 3000;

app.use('/', express.static('dist'));

app.get('/api/punches', async (req, res) => {
  let punches = await Common.getPunches();
  res.json(punches);
});

app.listen(process.env.PORT || port, () => { console.log("something!"); }); // eslint-disable-line
