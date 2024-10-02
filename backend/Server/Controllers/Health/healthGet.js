const health = require("../../Models/health")

const healthCatData = async (req, res) => {
    

    try {

        const result = await health.find()

        res.status(200).json({"message":"health Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "health Content find error !", error : error.message })   
    }


}
module.exports = healthCatData