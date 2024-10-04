const router = require('express').Router();

// Use leading slash for the path
router.use('/api/v1/tickets', require('../routers/ticket'));

// Define the health check route
router.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Success' });
});

module.exports = router;
