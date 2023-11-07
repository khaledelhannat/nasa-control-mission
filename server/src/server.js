const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
// const path = require('path');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}...`);
    });
};

startServer()