const express = require("express");
const Common = require("./util/Common");
const app = new express();
const port = 3000;

app.use('/', express.static('dist'));

app.get('/api/punches', async (req, res) => {
  let start = req.query.start;
  let end = req.query.end;
  let punches = await Common.getPunches(start, end);
  res.json(punches);
});

app.listen(process.env.PORT || port, () => { console.log("something!"); }); // eslint-disable-line
