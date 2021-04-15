const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const playersRouter = require('./routes/players');

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

//error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
});

app.listen(port, () => {
    console.log(`The Sweet Suite app listening at http://localhost:${port}`)
});