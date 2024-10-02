const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    bioName: {
        type: String,
        require: true,
        trim:true
    },
    bioCategoryImg: {
        type: String,
        require: true,
        trim:true
    },
    bioPath: {
        type: String,
        require: true,
        trim:true
    }

})




const bioCategory = new mongoose.model("bioCategory", userSchema)

module.exports = bioCategory;