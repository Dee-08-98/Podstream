const bioCategory = require("../Models/bioCategory")

const bio = async (req, res) => {
    const { bioName, bioCategoryImg, bioPath } = req.body
    if (!bioName || !bioCategoryImg || !bioPath) {
        return res.json({ "message": "All Fields are required" }).status(400)
    }

    try {
        const newbio = await bioCategory.create({ bioName, bioCategoryImg, bioPath })
        return res.json({ "message": "Bio Category registered sucessfull", result: newbio }).status(200)
    } catch (error) {
        return res.json({ "message": "bio registered error", error: error.message }).status(500)

    }
}

module.exports = bio;