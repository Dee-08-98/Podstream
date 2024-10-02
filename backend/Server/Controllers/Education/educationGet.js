const study = require("../../Models/education")

const educationCatData = async (req, res) => {
    

    try {

        const result = await study.find()

        res.status(200).json({"message":"education Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "education Content find error !", error : error.message })   
    }


}
module.exports = educationCatData