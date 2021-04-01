const playersRouter = require('./routes/players');
const bcryptRouter = require('./routes/bcrypt');
const port = process.env.PORT || 8080;
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

    app.listen(port, () => {
        console.log(`The Sweet Suite app listening at http://localhost:${port}`)
    });
	return app
}

module.exports = createServer;