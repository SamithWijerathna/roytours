import mysql from "mysql2/promise";

declare global {
  var mysqlPool: mysql.Pool | undefined;
}

export function getDBConnection() {
  if (!global.mysqlPool) {
    global.mysqlPool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return global.mysqlPool;
}
