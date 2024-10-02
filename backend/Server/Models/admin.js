const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    adminName: {
        type: String,
        require: true
    },
    adminEmail: {
        type: String,
        require: true
    },
    adminPassword: {
        type: String,
        require: true,
        select: false,
        minLength: 6,
        maxLength:8
    }
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('adminPassword')) {
        next()
    }
    this.adminPassword = await bcrypt.hash(this.adminPassword, 10)
})


userSchema.methods.compareAdminPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.adminPassword)
}

const registerAdmin = new mongoose.model("registerAdmin", userSchema)

module.exports = registerAdmin;