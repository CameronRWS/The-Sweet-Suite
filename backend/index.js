const createServer = require("./server");
const port = process.env.PORT || 8080;
const app = createServer();

app.listen(port, () => {
    console.log(`The Sweet Suite app listening at http://localhost:${port}`)
});