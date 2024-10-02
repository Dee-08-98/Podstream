const mongoose = require('mongoose');

const cultureSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        nickName: {
            type: String,
            required: true,
            trim: true
        },
        job: {
            type: String,
            required: true,
            trim: true
        },
        dob: {
            type: Date,
            required: true
        },
        about: {
            type: String,
            required: true
        },
        earlyLife: {
            type: String,
            required: true
        },
        career: {
            type: String,
            required: true
        },
        impact: {
            type: String,
            required: true
        },
        awards: {
            type: String,
            required: true
        },
        conclusion: {
            type: String,
            required: true
        },
        imageAvtar: {
            img: String,
        },

        imageHeader: [
            {
                img: String,
               
            }
        ],
        imageGallery: [
            {
                img: String,
            }
        ],

    }
);

const culture = new mongoose.model('culture', cultureSchema);

module.exports = culture;


