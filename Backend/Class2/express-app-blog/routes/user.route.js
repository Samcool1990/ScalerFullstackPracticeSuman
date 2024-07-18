import express from 'express';
import {getAlluser,getuserById, deleteuserById, Createuser } from '../controllers/user.controller.js'

const router = express.Router();

router.get('/', getAlluser);
router.get('/:userId', getuserById);

router.post('/', Createuser);

router.put('/:userId', (req,res) => {});

router.delete('/:userId', deleteuserById);

export default router;