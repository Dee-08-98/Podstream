const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
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
        parents: {
            type: String,
            required: true,
            trim: true
        },
        spouse: {
            type: String,
            required: true,
            trim: true
        },
        children: {
            type: String,
            required: true,
            trim: true
        },
        education: {
            type: String,
            required: true,
            trim: true
        },
        netWorth: {
            type: String,
            required: true,
            trim: true
        },
        dob: {
            type: String,
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

const health = new mongoose.model('health', sportSchema);

module.exports = health;


