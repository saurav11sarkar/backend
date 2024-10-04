const router = require('express').Router();
const db = require('../db/db');

router.get('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
});

router.patch('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const updateTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: 'Updated Successfully', updateTicket });
});

router.delete('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
});

router.get('/u/:username', (req, res) => {
    const username = req.params.username;
    const ticket = db.findByUsername(username);
    res.status(200).json(ticket);
});

// router.patch('/u/:username', (req, res) => {
//     // Implement update by username logic here
// });

// router.delete('/u/:username', (req, res) => {
//     // Implement delete by username logic here
// });

router.post('/sell', (req, res) => {
    const { username, price } = req.body;
    const ticket = db.create(username, price);
    res.status(201).json({ message: 'Ticket Create Successfully', ticket });
});

router.post('/bulk', (req, res) => {
    const { username, price, quantity } = req.body;
    const ticket = db.bulkCreate(username, price, quantity);
    res.status(201).json({ message: 'Bulk Ticket Create Successfully', ticket });
});

router.get('/draw', (req, res) => {
    const winnerCount = req.query.wc ?? 3;
    const ticket = db.draw(winnerCount);
    res.status(200).json({ message: 'winner', ticket });
});

router.get('', (req, res) => {
    const ticket = db.find();
    res.status(200).json(ticket);
});

module.exports = router;
