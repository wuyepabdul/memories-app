import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = await new PostMessage(post);
  try {
    await newPost.save();
    res.status(200).json({ message: "new Post created", newPost });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
