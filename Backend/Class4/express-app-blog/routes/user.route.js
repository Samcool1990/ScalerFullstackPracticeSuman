import express from 'express';
import {getuserById, deleteuserById, Createuser } from '../controllers/user.controller.js'
import { updateuserById } from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/', getAlluser);
router.get('/:userId', getuserById);

router.post('/', Createuser);

router.put('/:userId',updateuserById);

router.delete('/:userId', deleteuserById);

export default router;