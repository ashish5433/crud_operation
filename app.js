import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/db.js';
import cors from 'cors'
import route from './routes/route.js';
dotenv.config()
const PORT = process.env.PORT || 4000

const app=express();

app.use(cors())
app.use(express.json());



connectDatabase();
app.use('/api/users', route);

// const payload = { id: '123454', role: 'admin' };

// const token = jwt.sign(payload, process.env.JWT_TOKEN);
// console.log('Generated Token:', token);



// app.use((req, res, next) => {
//     console.log('Incoming Headers:', req.headers); // Log all headers
//     next();
// });

app.get('/',(req,res)=>{
    res.send("Testing code")
})
app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
})