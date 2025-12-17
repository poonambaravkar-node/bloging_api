
const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
  const post = new Post({ ...req.body, author: req.user.id });
  await post.save();
  res.json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.addComment = async (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    post: req.params.id,
    author: req.user.id
  });
  await comment.save();
  res.json(comment);
};

exports.trendingPosts = async (req, res) => {
  const data = await Comment.aggregate([
    { $group: { _id: '$post', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 }
  ]);
  res.json(data);
};
