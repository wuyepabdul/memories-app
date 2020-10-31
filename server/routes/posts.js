import express from "express";
import { createPost, getPosts } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);

export default router;
