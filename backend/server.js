const playersRouter = require('./routes/players');
const bcryptRouter = require('./routes/bcrypt');
const express = require('express');

function createServer() {
	const app = express();
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    
    app.get('/', (req, res) => {
        res.json({'message': 'API is running at /api.'});
    })
    
    app.use('/api/players', playersRouter);
    app.use('/api/bcrypt', bcryptRouter);
    
    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({'message': err.message});
        return;
    });
	return app
}

module.exports = createServer;