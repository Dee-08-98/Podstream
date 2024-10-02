const mongoose = require('mongoose')

const DB = async () => {
    try {

        const connectionDB = await mongoose.connect(process.env.DB_URL)
        if (connectionDB) {
            console.log("---***Database Connected Successfully***---");
        }

    } catch (error) {
        console.log('DataBase Connection error', error);
    }
}

module.exports = DB