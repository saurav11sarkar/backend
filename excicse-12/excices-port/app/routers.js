const router = require('express').Router();

router.use('/api/v1/ticket', require('../router/ticketRouter'));
router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Successfully' });
});

module.exports = router;
