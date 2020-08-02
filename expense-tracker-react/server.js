const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
//dotenv. Dotenv is a zero-dependency module that loads environment variables from a . 
//env file into process. env . Storing configuration in the environment separate from 
//code is based on The Twelve-Factor App methodology. like application variable in .net
const colors = require('colors')
const morgan =require('morgan')

//Morgan is a HTTP request logger middleware for Node. js. It simplifies the process of 
//logging requests to your application. You might think of Morgan as a helper that 
//generates request logs. It saves developers time because they don't have to manually 
//create these logs
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB()

const transactions = require('./routes/transactions')

const app = express()
app.use(express.json())

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
//in case we have /api/v1/transactions we will call transadtion router to detail it
//router is a middleware reacts to the certain url and let server what to do with it
app.use('/api/v1/transactions',transactions)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}
app.get('/', (req,res)=>res.send('Hello'))

const PORT = process.env.PORT||5000


app.listen(PORT,console.log(`server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))