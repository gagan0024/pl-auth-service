const app = require('./app');
const dotenv = require('dotenv');
const db = require("./components/dal/dbContext");
const config = require('./config/config.js');

db.sequelize.sync();

dotenv.config({
    path: './config.env'
});

// Start the server
const port = gConfig.port;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!!');
    console.log(err.name, err.message);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!');
    console.log(err.name, err.message);
});