const shortid = require('shortid');

/**
 * 
 * @param {string} username 
 * @param {number} price 
 * @returns 
 */
const createTicket = (username, price) => {
    ticket = {
        id: shortid.generate(),
        username: username,
        price: price,
        createAt: new Date(),
        updateAt: new Date()
    }
    return ticket;
}

module.exports = createTicket;
