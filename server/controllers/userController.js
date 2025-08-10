const path = require("path"); 
require("dotenv").config({ path: path.resolve(__dirname, "../.env")}); 
const db = require("../models"); 
const User = db.User; 
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcryptjs"); 

const createToken = (_id, username) => {
    return jwt.sign({_id, username}, process.env.SECRET, { expiresIn: "12h"}); 
}; 

exports.registerUser = async (req, res) => {

    const { username, password } = req.body; 

    console.log(`Welcome ^${username}`); 

    try {

        if (!username || !password) {

            throw new Error("Tous les champs doivent être renseignés."); 

        }; 

        const newUser = await User.create({
            username, 
            password
        }); 

        return res.status(201).send(newUser); 

    } catch (err) {
        return res.status(500).send({ message: err.message }); 
    }

}; 

exports.loginUser = async (req, res) => {
    const { username, password } = req.body; 

    try {

        const user = await User.findOne({
            where: {username},
        }); 

        if (!user) {
            throw new Error("Nom d'utilisateur incorrect"); 
        }; 

        const match = await user.validatePassword(password); 

        if (!match) {
            return res.status(400).send({ message: "Mot de passe incorrect"}); 
        }; 

        const token = createToken(user.id, user.username); 

        return res.status(200).send({
            id: user.id, 
            username: user.username, 
            token
        }); 

    } catch (err) {
        return res.status(500).send({ message: `Erreur de connexion: ${err.message}`}); 
    }

}; 