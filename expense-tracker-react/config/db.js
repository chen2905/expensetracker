const mongoose = require('mongoose')
//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages 
//relationships between data, provides schema validation, and is used to translate between 
//objects in code and the representation of those objects in MongoDB.

const connectDB = async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log(`Error:${err.message}`.red.bold)
        process.exit(1)
    }

}
module.exports =connectDB