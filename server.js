const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});


app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).send('Please provide two numbers');
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.send(`The result of adding ${num1} and ${num2} is ${result}`);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
