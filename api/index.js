require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const errormiddleware = require('./models/middlewares/error-middleware')

const port = 5001;

app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname + '/public')));
app.use(require('./routes'));

app.use(cors())

app.use(errormiddleware);


// mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://aybi:123@cluster0.lvirmgm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})