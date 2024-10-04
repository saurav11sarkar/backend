const createTicket = require("../models/modelTicket")

class MyDB {
    constructor() {
        this.tickets = [];
    }

    find() {
        return this.tickets;
    }

    create(username, price) {
        const ticket = createTicket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    bulkCreate(username, price, quantity) {
        const tickets = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            tickets.push(ticket);
        }
        return tickets;
    }

    findById(ticketId) {
        const ticket = this.tickets.find(item => item.id === ticketId);
        return ticket;
    }

    findByUsername(username) {
        return this.tickets.filter(item => item.username === username);
    }

    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        if (!ticket) return null;

        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();
        return ticket;
    }

    deleteById(ticketId) {
        const index = this.tickets.findIndex(item => item.id === ticketId);

        if (index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    draw(winnerCount) {
        const indices = [];
        while (indices.length < winnerCount && indices.length < this.tickets.length) {
            let index = Math.floor(Math.random() * this.tickets.length);
            if (!indices.includes(index)) {
                indices.push(index);
            }
        }
        return indices.map(index => this.tickets[index]);
    }
}

const myDB = new MyDB();

module.exports = myDB;
