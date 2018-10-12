(async function() {
  let start = 0;
  let end = 999999999999999;
  const Common = require("./util/Common");

  let results = await Common.getPunches(start, end);

  Common.logSomething("Successfully got punches!!!");
  Common.logSomething(results, "dir");
})();
