const news = require("../../Models/news")

const newsCatData = async (req, res) => {
    

    try {

        const result = await news.find()

        res.status(200).json({"message":"news Content find Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "news Content find error !", error : error.message })   
    }


}
module.exports = newsCatData