
import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/postController.js";
const router = express.Router();

// http://localhost:5000/posts
router.post('/add', createPost); 
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;