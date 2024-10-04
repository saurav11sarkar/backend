const connectDB = require('./db');
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./user');

const app = express();
app.use(express.json());

app.get('/register', (req, res) => {
    // Implementation for GET /register can go here
    res.send('Register page');
});

app.post('/register', async (req, res,next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Invalid data. All fields are required.' });
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User alrady exits" })
        }
        
        user = new User({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;

        await user.save()
        res.status(201).json({ message: `User registered successfully!\n${user}` });
    }
    catch (e) {
        next(e)
    }
});

app.get('/', (_req, res) => {
    const obj = {
        name: 'Saurav',
        email: 'saurav@gmail.com'
    };
    res.json(obj);
});

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Server Error occurred' })
})

connectDB('mongodb://localhost:27017/attendance-db')
    .then(() => {
        console.log('Database connected');

        app.listen(4000, () => {
            console.log('Listening on port 4000');
        });
    })
    .catch((e) => {
        console.log(e);
    });
