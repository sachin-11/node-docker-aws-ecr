const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.send('This is demo app for testing hello from expressghjjh')
})



app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})