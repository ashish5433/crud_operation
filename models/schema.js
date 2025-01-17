import mongoose from "mongoose";


const schema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    role: { 
        type: String,
         default: 'user' 
        },
},{timestamps:true}
)

const User = mongoose.model('myData',schema)

export default User