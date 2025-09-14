const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Login } = require("../bin/Db");

const router = express.Router();
router.use(express.json());

const JWT_SECRET = "tharun123456";

// Middleware to validate token
const Auth = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach user info
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token." });
    }
};

// Register user
router.post("/RegisterUser", async (req, res) => {
    try {
        const { email, password, role, Company } = req.body;

        if (!email || !password || !role || !Company) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await Login.findOne({ email });
        if (existingUser) {
            console.log(existingUser, 'existingUser')
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Login({
            email,
            password: hashedPassword,
            role,
            Company
        });

        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Login user
router.get("/LoginUser", async (req, res) => {
    try {
        const { userLogin } = req.query;
        console.log(
            userLogin
            , 'user login data ')

        const user = await Login.findOne({ email: userLogin.email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        if (user.Company != userLogin.Company) {
            return res.json({ message: "valid Company" })
        }
        const validPassword = await bcrypt.compare(userLogin.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ message: userLogin, token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

//  protected route
router.get("/ProtectedRoute", Auth, (req, res) => {
    res.json({ message: `Welcome ${req.user.email}, role: ${req.user.role}` });
});

module.exports = router;
