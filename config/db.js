const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://Huynv:3DC3o62RqDeHFlGm@cluster0.77mq5.mongodb.net/API_md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
