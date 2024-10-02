const comedy = require("../../Models/comedy");

const comedySpecificContent = async (req, res) => {

    const id = req.params.id

    if(!id){
        res.status(400).json({ message: "id is required" })
    }

    try {

        const result = await comedy.findById(id)

        if (!result) {
            res.status(404).json({ message: "Not Found" })
        }

        res.status(200).json({ message: "Specific content of comedy category find", result: result })

    } catch (error) {

        return res.json({ "message": "Specific content of comedy category error", error: error.message }).status(500)

    }

}

module.exports = comedySpecificContent;