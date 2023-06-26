const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Use apiRoutes
app.use(routes);

// Start the API server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Your server is running on ${PORT}!`);
        //console.log(`Use GraphQL at http://localhost:${PORT}${cwd}/graphql`);
    });
}
);