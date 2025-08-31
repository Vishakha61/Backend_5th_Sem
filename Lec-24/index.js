const express = require('express');
const isLogin = require('./middleware/isLogin');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// Models
const Blog = require('./model/blog');
const User = require('./model/user');

let blogRoutes = require('./routes/blogRoutes');
let userRoutes = require('./routes/userRoutes');
let authRoutes= require("./routes/auth")

// create
app.use('/api/blogs', isLogin, blogRoutes);
app.use('/api/users', userRoutes);
app.use('api/auth',authRoutes);
// Login route to generate JWT token
app.post('/login', (req, res) => {
  // Your login logic here
  // For demonstration, always return success
  res.json({ success: true, message: 'Login successful' });
});
mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected!'));

app.listen(5556, () => {
    console.log(`Server is running on http://localhost:5556`);
});