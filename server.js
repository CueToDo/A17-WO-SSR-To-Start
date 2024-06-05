function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use('/', express.static(__dirname + '/dist/a17-soc'));

app.listen(port,()=>{
    console.log('app started and listening on port:', port)
});