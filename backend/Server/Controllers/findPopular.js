const Popular = require("../Models/popular")

const findPopular = async (req, res) => {

    try {
        const result = await Popular.find()
        res.status(200).json({ "message": "Popular Found Sucessfull", result: result })
    } catch (error) {
        res.status(500).json({ "message": "Internal Server Error", error: error.message })
    }

}

module.exports = findPopular