require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { connectToDb } = require('./database/db');
const { protect } = require('./middleware/authMiddleware')
const cors = require('cors')

const port = process.env.PORT || 8000

connectToDb();

const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))
app.use(
    cors({
      origin: "http://localhost:3000", 
      credentials: true,
    })
  );
app.use('/user', require('./routes/userRoutes'))
app.use('/note', protect, require('./routes/noteRoute'))

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})