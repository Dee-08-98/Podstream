const study = require("../../Models/education");
const sport = require("../../Models/sports");

const educationSpecificContent = async (req, res) => {

    const id = req.params.id

    if(!id){
        res.status(400).json({ message: "id is required" })
    }

    try {

        const result = await study.findById(id)

        if (!result) {
            res.status(404).json({ message: "Not Found" })
        }

        res.status(200).json({ message: "Specific content of education category find", result: result })

    } catch (error) {

        return res.json({ "message": "Specific content of education category error", error: error.message }).status(500)

    }

}

module.exports = educationSpecificContent;