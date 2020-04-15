//20-04-14 Mongo CRUD Lecture

//Create entry point
let express = require('express');
let app = express();

//Define port number
let portNumber = 2112;

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//import json middleware
app.use(express.json());

//Set up listener
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

//pull in api
let api = require('./routes/api');

//mount route
app.use('/api',api);

//sanity
app.get('/test',(req,res)=>{
    res.send(`Loud and Clear`);
})