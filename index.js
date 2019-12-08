const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Shadab");
});

app.listen(5000, () => {
    console.log('Connecting')
})