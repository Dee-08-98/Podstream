const DB = require('./DB_Connection/DB')
const app = require('./app')

const dotenv = require('dotenv')
dotenv.config()

DB()

const port = process.env.PORT || 5555

app.listen(port , ()=>{
    console.log('Server running on port :- ', port);
})