const registerAdmin = require("../Models/admin")
const generateToken = require("../Utils/generateToken")

const adminLogin = async (req, res) => {

    const { adminEmail, adminPassword } = req.body
    if (!adminEmail || !adminPassword) {
        return res.json({ "message": "All fields are required" }).status(400)
    }
    if (adminPassword.length >= 6 && adminPassword.length <= 8) {
        try {

            const existEmail = await registerAdmin.findOne({ adminEmail }).select("+adminPassword")
            if (!existEmail) {
                return res.json({ "message": "admin not register" }).status(400)
            }

            const isPasswordMatched = await existEmail.compareAdminPassword(adminPassword)
            if (!isPasswordMatched) {
                return res.json({ "message": "invalid email or password" }).status(400)
            }

            if (existEmail.adminEmail && isPasswordMatched) {
                const payload = {
                    id: existEmail._id,
                    adminEmail: existEmail.adminEmail,
                    adminName: existEmail.adminName
                }
                const token = generateToken(payload)


                const option = {
                    httpOnly: true,
                    secure: true
                }

                return res.cookie("adminLoginCookie", token, {
                    expires: new Date(
                        Date.now() + 7 * 24 * 60 * 60 * 1000,
                    ),
                    option
                }).json({ "message": "admin login sucessfull", token: token, admin: existEmail }).status(200)
            }

        } catch (error) {
            return res.json({ "message": "admin registered error", error: error.message }).status(500)
        }
    }

    return res.json({ "message": "Password must be between 6 and 8 character" }).status(400)
}

module.exports = adminLogin;