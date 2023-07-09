const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('hello prabhjot how are you')
});

app.listen(5000, () => {
    console.log('server running');
})
