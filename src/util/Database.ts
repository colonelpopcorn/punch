const Connection = require("database-js").Connection;
// const Common = require("./Common");

module.exports = class Database {
  static getConnection(connStr) {
    try {
      return new Connection(connStr);
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      //Common.logSomething(error, "error");
    }
  }
}
