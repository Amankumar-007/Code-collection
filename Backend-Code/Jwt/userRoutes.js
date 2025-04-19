import express from 'express';
import {
  getUsers,
  registerUser,
  loginUser
} from '../controllers/userController.js';

import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Private route
router.get('/', protect, getUsers); // only authenticated users can access

export default router;
