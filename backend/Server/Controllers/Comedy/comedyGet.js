const comedy = require("../../Models/comedy")

const comedyCatData = async (req, res) => {
    

    try {

        const result = await comedy.find()

        res.status(200).json({"message":"comedy Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "comedy Content find error !", error : error.message })   
    }


}
module.exports = comedyCatData