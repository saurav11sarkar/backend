const express = require("express");
const connectDB = require("./db");
const User = require("./user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("./middleware/authenteget");

const app = express();
app.use(express.json());

app.get("/register", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid data. All fields are required." });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({ name, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id }, // Only include necessary fields like user ID
      process.env.JWT_SECRET || "secret-key",
      { expiresIn: "1h" } // Set token expiry
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/private", authenticate, (req, res) => {
  console.log("Authenticated user:", req.user);
  res.status(200).json({ message: "This is a private route" });
});

app.get("/public", (req, res) => {
  res.status(200).json({ message: "This is a public route" });
});

app.get("/", (req, res) => {
  const obj = {
    name: "Saurav Sarkar",
    email: "sarkar@gmail.com",
  };
  res.status(200).json(obj);
});

// Connect to the database
connectDB("mongodb://localhost:27017/loginDB")
  .then(() => {
    console.log("Database connected");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
