const Post = require("../models/Post");

// Отримати всі пости
exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("index", { posts });
};

// Створити новий пост
exports.createPost = async (req, res) => {
  const { title, description, author } = req.body;
  await Post.create({ title, description, author });
  res.redirect("/");
};

// Видалити пост
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

// Показати форму для редагування поста
exports.showEditForm = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("form", { post });
};

// Оновити пост
exports.updatePost = async (req, res) => {
  const { title, description, author } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { title, description, author });
  res.redirect("/");
};
