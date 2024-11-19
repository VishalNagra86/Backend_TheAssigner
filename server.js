const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Route to handle contact form submission
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received data:", { name, email, message });

    if (name && email && message) {
        res.status(200).send({ message: "Form submitted successfully" });
    } else {
        res.status(400).send({ error: "All fields are required" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
