const mongoose = require('mongoose');

const connectionDB = (connected)=>{
    return mongoose.connect(connected);
}

module.exports = connectionDB;