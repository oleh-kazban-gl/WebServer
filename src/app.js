const express = require('express');
const path = require('path');
const app = express();

const publicContent = path.join(__dirname, '../public');

app.use(express.static(publicContent));

app.get('', (req, res) => {
  res.send('<h1>Hello Express</h1>');
})
app.get('/help', (req, res) => {
  res.send({
    title: 'Help page'
  });
})
app.get('/about', (req, res) => {
  res.send('About');
})
app.get('/weather', (req, res) => {
  res.send('Weather');
})

app.listen(3000, () => {
  console.log('Server is up on 3000 port');
});