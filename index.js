const express = require('express');
const app = express();
const port = 3000;
const format = require('date-format');

app.get('/', (req, res) => res.status(200).send('<h1>Hello World!</h1>'));

app.get('/api/v1/instagram',(req, res) => {
    const instaSocial = {
        username : 'itsmesohit.in',
        followers : 650,
        following : 298,
        posts : 26,
        date: format('dd-mm-yyyy - hh:mm:ss', new Date())
    }
    res.status(200).json(instaSocial);
});
app.get('/api/v1/twitter',(req, res) => {
    const instaSocial = {
        username : 'itsmesohit.in',
        followers : 4,
        following : 92,
        twitts : 7,
        date: format('dd-mm-yyyy - hh:mm:ss', new Date())
    }
    res.status(200).json(instaSocial);
});
app.get('/api/v1/linkedin',(req, res) => {
    const instaSocial = {
        username : 'itsmesohit',
        followers : 6500,
        following : 900,
        posts : 3,
        date: format('dd-mm-yyyy - hh:mm:ss', new Date())
    }
    res.status(200).json(instaSocial);
});

app.get('/api/v1/:token/:id',(req, res) => {
    console.log(req.params.token);
    res.status(200).json(
        {
        token: req.params.token,
        id: req.params.id}
        );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

