import mongoose from 'mongoose';

const connectDatabase= async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected");
    }catch(err){
        console.error(`Error connecting to Db ${err}`)
    }
}

export default connectDatabase