const express = require('express');
const path = require('path');
const hbs = require('handlebars');
const userDao = require('./userDao.js');

const app = new express();

app.set('view engine', hbs);
app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res)=> {
    res.render('list.hbs', {totalUsers: 1, 
        users:[
        {name: 'hemant sharma', id:1},
        {name: 'Aniket', id:2}
    ]});
});

app.get('/listWithLink', (req, res)=> {
    res.render('listWithLink.hbs', userDao.getAllUsers());
});
app.get('/userDetails', (req, res)=> {
    res.render('userDetails.hbs', userDao.getUserById(req.query.userId));
});
app.listen(3000, ()=> {
    console.log('dynamic views started at 3000');
});