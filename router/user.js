const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const user = new User({username: req.body.username, email: req.body.email, password: req.body.password});
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });      
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User .findOne({ email, password }); 
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' }); }  
        res.status(200).json({ message: 'Login successful', user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
);

module.exports = router;