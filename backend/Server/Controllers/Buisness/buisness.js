const buisness = require("../../Models/buisness");

const buisnessCat = async (req, res) => {
    const { name, nickName, job, dob, about, earlyLife, career, impact, awards, conclusion, imageAvtar, imageHeader, imageGallery, parents, companyDetails, spouse, children, education, netWorth } = req.body;

    if (!name || !nickName || !job || !dob || !about || !earlyLife || !career || !impact || !awards || !conclusion || !imageAvtar || !imageHeader || !imageGallery || !parents || !spouse || !children || !education || !netWorth ) {

        return res.status(400).json({ "message": "All Fields are required !" })

    }

    try {

        const result = await buisness.create({
            name, nickName, job, dob, about, earlyLife, career, impact, awards, conclusion, imageAvtar, imageHeader, imageGallery, parents, spouse, children, education, netWorth
        })

        res.status(200).json({ "message": "buisness Content Registered Sucessfull", result: result })

    } catch (error) {
        res.status(500).json({ "message": "buisness Content Registered error !", error: error.message })
    }


}
module.exports = buisnessCat