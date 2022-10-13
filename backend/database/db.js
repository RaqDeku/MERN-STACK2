const mongoose = require('mongoose');

let URI = 'mongodb://127.0.0.1:27017/usersRegistered'

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