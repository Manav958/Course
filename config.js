const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.CHATGPT;

module.exports = {
    API_KEY
};
