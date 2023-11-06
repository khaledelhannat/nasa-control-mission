const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');
// const path = require('path');

const PORT = process.env.PORT || 8080;

const MONGO_URL = 'mongodb+srv://nasa-api:BhNSjPa5FfyrEUpr@nasacluster.zv2dayx.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}...`);
    });
};

startServer()