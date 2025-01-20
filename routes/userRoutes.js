import express from 'express';
import {
  getAllUsers,
  registerController,
  loginController,
} from '../controllers/userContoller.js';

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get('/all-users', getAllUsers);

// CREATE USER || POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);

export default router;
