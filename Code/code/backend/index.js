const connectDB = require('./config/config');
const authMiddleware = require("./middlewares/authMiddleware");
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Course = require('./models/Course');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using config
connectDB();

app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Online Learning Platform backend is running!');
});

// User registration route
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, username, email, password, userType } = req.body;

    // Check for missing fields
    if (!fullName || !username || !email || !password || !userType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Basic email format validation
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      userType
    });
    await user.save();

    return res.status(201).json({ message: "Registration successful! Please login." });
  } catch (err) {
    console.error("Registration error:", err); // Improved error logging
    res.status(500).json({ message: "Server error" });
  }
});

// User login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Try finding by username or email
    const user = await User.findOne({
      $or: [{ username }, { email: username }]
    });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    // Add fullName and username to the response
    res.json({ message: 'Login successful', token, fullName: user.fullName, username: user.username });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new course (protected route)
app.post('/api/courses', authMiddleware, async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const course = new Course({ title, description, instructor });
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (err) {
    console.error("Course creation error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error("Get courses error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a course (protected route)
app.delete('/api/courses/:id', authMiddleware, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    console.error("Delete course error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});