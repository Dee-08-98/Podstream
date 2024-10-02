const Trending = require("../../Models/trending")

const findTrending = async (req, res) => {

    try {
        const result = await Trending.find()
        res.status(200).json({ "message": "trending Found Sucessfull", result: result })
    } catch (error) {
        res.status(500).json({ "message": "Internal Server Error", error: error.message })
    }

}

module.exports = findTrending