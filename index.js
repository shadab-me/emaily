const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Shadab");
});
app.get('/', (req, res) => {
    res.send('Hey! This Shadab')
})
 
const PORT  = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Connecting')
})