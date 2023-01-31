import Sequelize from "@sequelize/core";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("./config.json")

let db = {};

let sequelize;


sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  //we use define to disable created on and updated on and we use freezetablename because seq automatically appends s after table name
  define: {
    timestamps: true,
    freezeTableName: true,    }
}
  );
  sequelize.sync().then(
    function () {
      console.log("== DB connection sucessful. ==");
    },
    function (err) {
      // catch error here
      console.log("SequelizeError: ", err.message);
    }
  );

db.sequelize = sequelize;
export default db;