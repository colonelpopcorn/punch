import { Connection } from "database-js";

export default class Database {
  getConnection(connStr) {
    try {
      return new Connection(connStr);
    } catch (err) {
      console.log("It's a problem") // eslint-disable-line no-console
    }
  }
}

