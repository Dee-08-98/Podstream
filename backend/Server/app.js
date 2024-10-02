const express = require('express')
const app = express()
// const dotenv = require('dotenv')
// dotenv.config()

app.use(express.json())

const cors = require('cors')
// app.use(cors(
//     {
//         origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true
//     }
// ))

app.use(cors())

const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

const router = require('./Routes/routes.js')



app.use('/api', router)

module.exports = app