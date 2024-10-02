const news = require("../../Models/news");

const newsSpecificContent = async (req, res) => {

    const id = req.params.id

    if(!id){
        res.status(400).json({ message: "id is required" })
    }

    try {

        const result = await news.findById(id)

        if (!result) {
            res.status(404).json({ message: "Not Found" })
        }

        res.status(200).json({ message: "Specific content of news category find", result: result })

    } catch (error) {

        return res.json({ "message": "Specific content of news category error", error: error.message }).status(500)

    }

}

module.exports = newsSpecificContent;