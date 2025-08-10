const { registerUser, loginUser } = require("../controllers/userController");

module.exports = app => {

    const router = require("express").Router(); 

    router.post("/register", registerUser); 
    router.post("/login", loginUser); 

    app.use("/api/users", router); 

}