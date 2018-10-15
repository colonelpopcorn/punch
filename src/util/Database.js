const Connection = require("database-js").Connection;
const Common = require("./Common");

module.exports = class Database {
  static getConnection(connStr) {
    try {
      return new Connection(connStr);
    } catch (error) {
      Common.logSomething(error, "error");
    }
  }
}
