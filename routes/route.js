import express from 'express';
import { createUser,updateUser,deleteUser,getUser } from '../controllers/userCRUD.js';
import { authenticate,authorize } from '../middlewares/middleware.js';

const route = express.Router();

route.post('/', createUser)
route.get('/',authenticate,getUser)
route.put('/:id',authenticate,authorize('admin'),updateUser)
route.delete('/:id',authenticate,authorize('admin'),deleteUser)

export default route
