const science = require("../../Models/science")

const scienceCatData = async (req, res) => {
    

    try {

        const result = await science.find()

        res.status(200).json({"message":"science Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "science Content find error !", error : error.message })   
    }


}
module.exports = scienceCatData