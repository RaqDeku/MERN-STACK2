require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { connectToDb } = require('./database/db');
const { protect } = require('./middleware/authMiddleware')

const port = process.env.PORT || 5000

connectToDb();

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/user', express.json(), require('./routes/userRoutes'))
app.use('/note', express.json(), protect, require('./routes/noteRoute'))

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})