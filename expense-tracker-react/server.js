/*
Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server
Node.js uses asynchronous programming!
A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

Sends the task to the computer's file system.
Waits while the file system opens and reads the file.
Returns the content to the client.
Ready to handle the next request.
Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
Node.js files have extension ".js"
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
*/
/* 
What is NPM?
NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js
*/

/*below  are the buidin and third party modules
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

*/
const path = require('path')
const express = require('express')
/*
Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.
*/
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
/*
we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.
 */

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


//serve static assets if in production
if (process.env.NODE_ENV==='production'){
//set static folder
app.use(express.static('(client/build)'))
app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
}



const PORT = process.env.PORT||5000


app.listen(PORT,console.log(`server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

/*tell app to listen to the request which tries to access the server on the port number*/