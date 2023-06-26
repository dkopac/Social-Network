const { connect, connection } = require('mongoose');

// Connect to the Mongo DB
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-networkDB';

connect(connectionString);

module.exports = connection;