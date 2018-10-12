// #region "Constants"
import DB from "./Database";

// #endregion

export default class Common {
  private static readonly CONNECT_STR = "sqlite://../../punch.db"; // Just windows for now, I guess.
  private static readonly INSERT_PUNCH_QUERY = `
    INSERT INTO punches VALUES (?, ?);
  `;
  static logSomething(msg, level = "log") {
    let funcToExec = console[level]; // eslint-disable-line no-console
    if (typeof funcToExec === "function") {
      funcToExec(msg); 
    } else {
      console.log(msg); // eslint-disable-line no-console
    }
  }
  
  static getConnectionString() {
    return this.CONNECT_STR;
  }

  static getInsertPunchQuery() {
    return this.INSERT_PUNCH_QUERY;
  }

  static async createPunch(typeOfPunch) {
    let nowDate = Date.now();
    let conn = DB.getConnection(this.CONNECT_STR);
    let statement = conn.prepareStatement(this.INSERT_PUNCH_QUERY);
    return await statement.execute(typeOfPunch, nowDate.toString());   
  }
}
