import express from 'express';
import { createUser,updateUser,deleteUser,getUser } from '../controllers/userCRUD.js';
import { authenticate,authorize } from '../middlewares/middleware.js';

const route = express.Router();

route.post('/', createUser)
route.get('/getusers',authenticate,getUser)
route.put('/updateuser/:id',authenticate,authorize('admin'),updateUser)
route.delete('/deleteuser/:id',authenticate,authorize('admin'),deleteUser)

export default route
