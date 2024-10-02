const sport = require("../../Models/sports")

const sportCatData = async (req, res) => {
    

    try {

        const result = await sport.find()

        res.status(200).json({"message":"sport Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "sport Content find error !", error : error.message })   
    }


}
module.exports = sportCatData