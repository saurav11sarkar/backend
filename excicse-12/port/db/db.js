const createTicket = require('../models/tickets');

class MyDB {
    constructor() {
        this.tickets = [];
    }

    /**
     * Create a new ticket
     * @param {string} username 
     * @param {number} price 
     * @returns {Object} ticket
     */
    create(username, price) {
        const ticket = createTicket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * Bulk create tickets
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     * @returns {Array<Object>} result
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;
    }

    /**
     * Find all tickets
     * @returns {Array<Object>} tickets
     */
    find() {
        return this.tickets;
    }

    /**
     * Find a ticket by its ID
     * @param {string} ticketId 
     * @returns {Object|undefined} ticket
     */
    findById(ticketId) {
        const ticket = this.tickets.find((item) => item.id === ticketId);
        return ticket;
    }

    /**
     * Find tickets by username
     * @param {string} username 
     * @returns {Array<Object>} tickets
     */
    findByUsername(username) {
        const tickets = this.tickets.filter(item => item.username === username);
        return tickets;
    }

    /**
     * Update a ticket by its ID
     * @param {string} ticketId 
     * @param {{username: string, price: number}} ticketBody 
     * @returns {Object|null} updated ticket
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        if (!ticket) return null;

        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * Delete a ticket by its ID
     * @param {string} ticketId 
     * @returns {boolean} success
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex(ticket => ticket.id === ticketId);
        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Draw random winners
     * @param {number} winnerCount 
     * @returns {Array<Object>} winners
     */
    draw(winnerCount) {
        const indexs = [];
        while (indexs.length < winnerCount && indexs.length < this.tickets.length) {
            let index = Math.floor(Math.random() * this.tickets.length);
            while (indexs.includes(index)) {
                index = Math.floor(Math.random() * this.tickets.length);
            }
            indexs.push(index);
        }
        const winners = indexs.map(index => this.tickets[index]);
        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;
