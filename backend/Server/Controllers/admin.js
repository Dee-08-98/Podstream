const registerAdmin = require("../Models/admin")

const admin = async (req, res) => {
    const { adminName, adminEmail, adminPassword } = req.body
    if (!adminName || !adminEmail || !adminPassword) {
        return res.json({ "message": "All fields are required" }).status(400)
    }
    if (adminPassword.length >= 6 && adminPassword.length <= 8) {
        try {

            const existEmail = await registerAdmin.findOne({adminEmail})
            if(existEmail){
                return res.json({ "message": "admin already register" }).status(400)
            }
            const userCreate = await registerAdmin.create({adminName , adminEmail , adminPassword})
            return res.json({ "message": "admin registered sucessfull" , result:userCreate }).status(200)
        } catch (error) {
            return res.json({ "message": "admin registered error" , error:error.message}).status(500)
        }
    }

    return res.json({ "message": "Password must be between 6 and 8 character" }).status(400)

}


module.exports = admin;