//20-04-14 Mongo CRUD Lecture

//Create entry point
let express = require('express');
let app = express();

//Define port number
let portNumber = 2112;

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