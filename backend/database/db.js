const mongoose = require('mongoose');

let URI = process.env.DB_URI

const connectToDb = async () => {
    try {
        let conn = await mongoose.connect(URI)
        if (conn) {
            console.log(`Successfully Conneted to Database on: ${conn.connection.port}`)
        }
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = { connectToDb };