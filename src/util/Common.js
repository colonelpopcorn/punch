// #region "Constants"
const DB = require("./Database");
const CONNECT_STR = `sqlite:///punch.db`; // Just windows for now, I guess.
const UNIX_EPOCH = Math.floor(new Date() / 1000);
const SCHEMA_QUERY = `
  CREATE TABLE IF NOT EXISTS punches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    \`type\` text not null,
    \`punch_time\` DATETIME not null
  );
`;
const INSERT_PUNCH_QUERY = `
  INSERT INTO punches (\`type\`, \`punch_time\`) VALUES (?, ?);
`;

const SELECT_ALL_PUNCH_QUERY = `
    SELECT * from punches WHERE punch_time >= ? AND punch_time <= ?
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
    let results = {};
    let conn;

    try {
      conn = DB.getConnection(CONNECT_STR);
    } catch (err) {
      Common.logSomething(err, "error");
      return results;
    }
    
    try {
      let nowDate = Date.now();
      let statement = conn.prepareStatement(SCHEMA_QUERY + INSERT_PUNCH_QUERY);
      results = await statement.execute(typeOfPunch, nowDate.toString());
    } catch (err) {
      Common.logSomething(err, "error");
    } finally {
      conn.close();
      return results; // eslint-disable-line no-unsafe-finally
    } 
  }

  static async getPunches(start = UNIX_EPOCH, end = Date.now()) {
    let results = {};
    let conn;
    try {
      conn = DB.getConnection(CONNECT_STR);
    } catch (err) {
      Common.logSomething(err, "error");
      return results;
    }
    
    try {
      let statement = conn.prepareStatement(SCHEMA_QUERY + SELECT_ALL_PUNCH_QUERY);
      results = await statement.query(start, end);
    } catch (err) {
      Common.logSomething(err, "error");
    } finally {
      conn.close();
      return results; // eslint-disable-line no-unsafe-finally
    }
  }
}
