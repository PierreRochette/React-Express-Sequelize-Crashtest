const express = require('express'); 
const cors = require("cors"); 
const path = require("path"); 
require("dotenv").config({ path: path.resolve(__dirname, '.env')}); 
const app = express(); 
const CLIENT_URL= process.env.VITE_CLIENT_URL; 
const CORPS_OPTIONS = {
    origin: CLIENT_URL, 
}; 
app.use(cors(CORPS_OPTIONS)); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const db = require("./models"); 
db.sequelize.sync()
    .then(() => { console.log("Synced Database.")})
    .catch((err) => { console.log(`Failed to sync database: ${err.message}`)}); 

// Default route
app.get("/", (req, res) => { res.json({ message: "Default route, test OK."})}); 

const PORT = process.env.API_PORT; 
app.listen(PORT, () => { console.log(`Server is running on port ${5174}`)})