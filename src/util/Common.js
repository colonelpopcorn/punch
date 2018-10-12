// #region "Constants"
const path = require("path");
const DB = require("./Database");
const dbPath = path.resolve("." + "\\punch.db");
const CONNECT_STR = `sqlite://${dbPath}`; // Just windows for now, I guess.
const INSERT_PUNCH_QUERY = `
    INSERT INTO punches VALUES (?, ?);
`;
// #endregion

module.exports = class Common {
  static logSomething(msg, level = "log") {
    let funcToExec = console[level]; // eslint-disable-line no-console
    if (typeof funcToExec === "function") {
      funcToExec(msg); 
    } else {
      console.log(msg); // eslint-disable-line no-console
    }
  }
  
  static getConnectionString() {
    return CONNECT_STR;
  }

  static getInsertPunchQuery() {
    return INSERT_PUNCH_QUERY;
  }

  static async createPunch(typeOfPunch) {
    let nowDate = Date.now();
    let conn = DB.getConnection(CONNECT_STR);
    let statement = conn.prepareStatement(INSERT_PUNCH_QUERY);
    return await statement.execute(typeOfPunch, nowDate.toString());   
  }
}
