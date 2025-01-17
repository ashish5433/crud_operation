import bcyrpt from 'bcrypt';
import User from '../models/schema.js';

// create user 
export const createUser = async (req,res)=>{
    try{
    const {name,email,password} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const hashedPassword = await bcyrpt.hash(password,10);

    const newUser = new User({name,email,password:hashedPassword});

    await newUser.save();
    res.status(200).json({message:"New user created successfully",user:newUser});
    }catch(err){
        
        res.status(500).json({message:"Error creating user",error:err});
    }
}
// Read User

export const getUser =async(req,res)=>{
    try{
    const user = await User.find()
    if(user){
        res.status(200).json({user:user});
    }else{
        res.status(200).json({message:"No User found"})
    }
}catch(err){
    res.status(500).json({message:"Error",error:err});
}
}

// update user

export const updateUser =async (req,res)=>{
    try{
        const {id}=req.params
        const updatedUser = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({message:"User updated",user:updatedUser})

    }catch(err){
        res.status(500).json({message:"Error updating User",error:err});
    }
}

// Delete a user

export const deleteUser = async(req, res) =>{
    try{
        const {id}=req.params
        await User.findByIdAndDelete(id)

        res.status(200).json({message:"User deleted"})
    }catch(err){
        res.status(500).json({message:"Error deleting User",error:err});
    }
}