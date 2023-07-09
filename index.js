const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('hello galaxy')
});

app.listen(5000, () => {
    console.log('server running');
})
