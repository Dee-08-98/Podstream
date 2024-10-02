const mongoose = require("mongoose");

const popularSchema = new mongoose.Schema({

    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    job: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: true,
    }

})

const Popular = new mongoose.model("Popular", popularSchema)
module.exports = Popular