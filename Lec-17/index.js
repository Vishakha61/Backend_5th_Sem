const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Models
const Blog = require('./models/blog');
const User = require('./models/user');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----------------- BLOG ROUTES -----------------
app.post('/blogs', async (req, res) => {
    try {
        let { title, body } = req.body;
        let newBlog = new Blog({ title, body, date: Date.now() });
        await newBlog.save();
        res.json({ success: true, message: "Blog created successfully", data: newBlog });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.get("/blogs", async (req, res) => {
    let allBlogs = await Blog.find();
    res.json({ success: true, message: "All blogs fetched successfully", data: allBlogs });
});

app.get("/blogs/:id", async (req, res) => {
    let blog = await Blog.findById(req.params.id);
    res.json({ success: true, message: "Single blog fetched successfully", data: blog });
});

// ----------------- USER ROUTES -----------------
app.post('/users', async (req, res) => {
    try {
        let { name, email, age } = req.body;
        let newUser = new User({ name, email, age });
        await newUser.save();
        res.json({ success: true, message: "User created successfully", data: newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.get('/users', async (req, res) => {
    let allUsers = await User.find();
    res.json({ success: true, message: "All users fetched successfully", data: allUsers });
});

app.get('/users/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    res.json({ success: true, message: "Single user fetched successfully", data: user });
});

// ----------------- CONNECT DB & START SERVER -----------------
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(3700, () => {
    console.log('Server is running on port 3700');
});
