const path = require("path"); 
require("dotenv").config({ path: path.resolve(__dirname, '../.env') }); 

module.exports = {
    development: {
        username: (process.env.POSTGRES_USER), 
        password: String(process.env.POSTGRES_PASSWORD),
        database: process.env.POSTGRES_DATABASE, 
        host: process.env.POSTGRES_HOST, 
        // Permet de communiquer avec la DB Postgres. Utiliser un autre dialecte si DB différente
        // de postgres
        dialect: "postgres", 
        // Désactiver les logs SQL de Sequelize. Au choix selon les besoins et la politique. 
        logging: false, 
    }, 
    production: {
        username: process.env.POSTGRES_USER, 
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE, 
        host: process.env.POSTGRES_HOST, 
        // Permet de communiquer avec la DB Postgres. Utiliser un autre dialecte si DB différente
        // de postgres
        dialect: "postgres", 
        // Désactiver les logs SQL de Sequelize. Au choix selon les besoins et la politique. 
        logging: false, 
        pool: {
            max: 20, 
            min: 0, 
            acquire: 30000, 
            idle: 10000, 
        }
        
    }, 
    pool: {
        max: 20, 
        min: 0, 
        acquire: 30000, 
        idle: 10000, 
    }
}