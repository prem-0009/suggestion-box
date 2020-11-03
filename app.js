console.clear();

const express = require('express');
const app = express();

const morgan = require('morgan');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/suggestion-box',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true    
})
.then(() => console.log('mongo connected'))
.catch((err) => console.log(`mongo error: ${err}`))

// view engine setup
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));//for post or put situation

//parent route
const routesSuggestion = require('./Routes/routesSuggestion.js')
app.use('/api/v1/suggestions', routesSuggestion);

// app.use('/create-suggestion', createSuggestion)

app.listen(port, ()=> {
    console.log(`listening on port: ${port}.`)
});