const express = require('express')
//Express is a minimal and flexible Node.js web application framework that provides 
//a robust set of features to develop web and mobile applications. It facilitates 
//the rapid development of Node based Web applications.
const router = express.Router()
//Express router is a class which helps us to create router handlers. By router handler
// i mean to not just providing routing to our app but also can extend this routing to handle validation,
// handle 404 or other errors etc.
const {getTransactions,addTransaction,deleteTransaction} = require('../controllers/transactions')

router
.route('/')
.get(getTransactions)
.post(addTransaction)


router
.route('/:id')
.delete(deleteTransaction)
module.exports = router