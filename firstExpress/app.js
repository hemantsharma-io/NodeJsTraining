const express = require('express');
const path = require('path');

const app = new express();
console.log(__dirname);
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
/* app.get('', (req, res)=> {
    res.send('<h1>Hello express</h1>');
});

app.get('/about', (req, res)=> {
    res.send('hello welcome to the about page!');
});

app.get('/deleteUser', (req, res) => {
res.send({name: 'hemant', age:38});
});*/

app.listen(3000, ()=> {
    console.log('Server setup on port 3000');
});