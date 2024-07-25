import express from 'express';
import { createUser, deleteUser, getUserById, updateUser, login, getUserDetails } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', login);

router.get('/:userId', getUserById);

router.post('/', getUserDetails);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

export default router;