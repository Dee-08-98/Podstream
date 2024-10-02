const culture = require("../../Models/culture");

const cultureCat = async (req, res) => {
    const { name, nickName, job, dob, about, earlyLife, career, impact, awards, conclusion, imageAvtar, imageHeader, imageGallery } = req.body;

    if (!name || !nickName || !job || !dob || !about || !earlyLife || !career || !impact || !awards || !conclusion || !imageAvtar || !imageHeader || !imageGallery) {

      return  res.status(400).json({ "message": "All Fields are required !" })

    }

    try {

        const result = await culture.create({
            name, nickName, job, dob, about, earlyLife, career, impact, awards, conclusion, imageAvtar, imageHeader, imageGallery
        })

        res.status(200).json({"message":"culture Content Registered Sucessfull" , result:result})
        
    } catch (error) {
        res.status(500).json({ "message": "culture Content Registered error !", error : error.message })   
    }


}
module.exports = cultureCat