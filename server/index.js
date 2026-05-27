const express = require('express')
const app = express()
const cors=require('cors')

require('dotenv').config()

const connectDb = require('./Config/db')
const userRoute = require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute')
const productRoute=require('./routes/productRoute')
const cartRoute=require('./routes/cartRoute')
const authRoute=require('./routes/authRoute')

const cookieParser = require('cookie-parser')

connectDb()

app.set("trust proxy", 1);
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'https://nike-model-crmfrontend.vercel.app',
    credentials:true
}))

app.use('/api/product',productRoute)
app.use('/api/user', userRoute)
app.use('/api/cart', cartRoute)
app.use('/api/admin',adminRoute)
app.use('/api/auth',authRoute)



app.get('/', (req, res) => {
    res.send("Welcome to CRM Backend")
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running on: http://localhost:${process.env.PORT}`)
})