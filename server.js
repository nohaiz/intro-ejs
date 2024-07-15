// server.js

const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const msgDisplay = {msg: 'Welcome to the homepage'};
const playerName = {player: {friend : 'nohaiz'}};
const inventory = [
    { name: 'Candle', qty: 4 },
    { name: 'Cheese', qty: 10 },
    { name: 'Phone', qty: 1 },
    { name: 'Tent', qty: 0 },
    { name: 'Torch', qty: 5 }
  ];

app.get('/', (req, res) => {
    res.render('home.ejs', {msgDisplay, playerName, inventory: inventory});
  });

app.get('/:itemId', (req, res) => {
    const item = inventory[req.params.itemId];
    res.render('show.ejs', {item});
})

  //Confirm server live
app.listen(3000, () => {
  console.log('Listening on port 3000');
});