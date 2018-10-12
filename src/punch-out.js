(async function() {
  const Common = require("./util/Common");

  await Common.createPunch("OUT");

  Common.logSomething("Successfully punched out!!");
  
})();
