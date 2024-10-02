const buisness = require("../../Models/buisness")

const buisnessCatData = async (req, res) => {
    

    try {

        const result = await buisness.find()

        res.status(200).json({"message":"buisness Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "buisness Content find error !", error : error.message })   
    }


}
module.exports = buisnessCatData