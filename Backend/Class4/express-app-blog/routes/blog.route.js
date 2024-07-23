import express from 'express';
import {getAllBlog,getBlogById, deleteBlogById, CreateBlog,  } from '../controllers/blog.controller.js'

const router = express.Router();


router.get('/', getAllBlog);
router.get('/:blogId', getBlogById);

router.post('/', CreateBlog);

router.put('/:blogId', (req,res) => {});

router.delete('/:blogId', deleteBlogById);

export default router;