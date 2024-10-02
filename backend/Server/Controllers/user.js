const registerUser = require("../Models/signup")

const user = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.json({ "message": "All fields are required" }).status(400)
    }
    if (password.length >= 6 && password.length <= 8) {
        try {

            const existEmail = await registerUser.findOne({email})
            if(existEmail){
                return res.json({ "message": "User already register" }).status(400)
            }
            const userCreate = await registerUser.create({name , email , password})
            return res.json({ "message": "user register sucessfull" , result:userCreate }).status(200)
        } catch (error) {
            return res.json({ "message": "user registered error" , error:error.message}).status(500)
        }
    }

    return res.json({ "message": "Password must be between 6 and 8 character" }).status(400)

}


module.exports = user;