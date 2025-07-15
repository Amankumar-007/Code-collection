const express = require('express');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // In a real application, you would verify credentials here
        const token = 'your-jwt-token';
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
