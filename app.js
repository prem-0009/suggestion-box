console.clear();

const express = require('express');
const app = express();

const morgan = require('morgan');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogger',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true    
})
.then(() => console.log('mongo connected'))
.catch((err) => console.log(`mongo error: ${err}`))

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));//for post or put situation

//parent route
// const suggestionRoutes = require('./Routes/routesSuggestion.js')
app.use('/api/v1/suggestion', (req, res)=>{
    console.log('hello')
});

app.listen(port, ()=> {
    console.log(`listening on port: ${port}.`)
});