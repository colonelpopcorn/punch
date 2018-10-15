(async function() {
  const Common = require("./util/Common");

  await Common.createPunch("IN");

  Common.logSomething("Successfully punched in!!");
})();
