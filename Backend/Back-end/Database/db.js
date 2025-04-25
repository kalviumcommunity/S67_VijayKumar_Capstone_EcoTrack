const {connect} = require('mongoose');

const connectDb = async(url)=>{
    try{
        await connect(url);
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log("Error connecting to MongoDB", error.message)
    }
}

module.exports = connectDb;