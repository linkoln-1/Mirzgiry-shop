require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
path = require('path');
const app = express();
const port = 5000;

app.use(express.json());
app.use(require('./routes'));
// mongoose.set('strictQuery', false);
app.use('/static', express.static(path.join(__dirname + 'public')));

mongoose.connect("mongodb+srv://aybi:123@cluster0.lvirmgm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})