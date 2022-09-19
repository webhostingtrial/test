const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

app.get('/', (req, res) => {
    const main = fs.readFileSync('index.html');
    res.end(main.toString());
})

app.get('/about', (req, res) => {
    const about = fs.readFileSync('about.html');
    res.end(about.toString());
})

app.get('*', (req, res) => {
    res.status = 404;
    const err404 = fs.readFileSync('./404/index.html');
    res.send(err404.toString());
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})