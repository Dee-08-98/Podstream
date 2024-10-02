const Trending = require("../../Models/trending")

const trendingPage = async(req, res) => {

    const { name, job, path, img } = req.body
    // console.log(req.body);

    if (!name || !job || !path || !img) {
        return res.status(400).json({ "message": "All Fields are required !" })
    }
    try {

        const result = await Trending.create({ name, job, path, img })

        res.status(200).json({"message":"trending page register sucessfull" , result:result})

    } catch (error) {

        res.status(500).json({ "message": " Popular page Register Error ", error: error.message })

    }

}

module.exports = trendingPage;