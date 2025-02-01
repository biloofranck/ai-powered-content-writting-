import { Sequelize } from "sequelize"



const dbName = process.env.DB_NAME as string
const dbUserName = process.env.DB_USERNAME as string
const dbPassword = process.env.DB_PASSWORD as string
const dbHost = process.env.DB_HOST
const dbDialect = "postgres"

const sequelizeConnection = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: dbDialect
});

export default sequelizeConnection;