require("dotenv").config();
const express = require("express");
const connectDB = require('./database'); // Import the database connection
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
// Middleware
app.use(express.json());
const Contact = require('./models/contact');

app.post('/contact', async (req, res) => {
    console.log("Received POST request on /contact");
    console.log("🔵 Full Request Body:", req.body); // This should log form data
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            console.log("🔴 Missing fields in request");
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        console.log("🟢 Data received correctly:", { name, email, message });

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        console.log("✅ Contact saved successfully!");

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});


app.use((req, res, next) => {
    console.log(`Received a ${req.method} request on ${req.url}`);
    next();
});


// Simple Route
app.get("/", (req, res) => {
    res.send("Welcome to Kadali Dental Backend!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
