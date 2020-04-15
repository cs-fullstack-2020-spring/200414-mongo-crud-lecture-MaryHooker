//create route
let express = require('express');
let router = express.Router();

//pull in EntrySchema
let EntryCollection = require('../models/EntrySchema');

//Read all entries
router.get('/',(req,res)=>{
    // res.send(`Get all method worked`);
    EntryCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    });
})

//Read entry by title
router.get('/:entryTitle',(req,res)=>{
    // res.send(`Get by title method worked`);
    EntryCollection.findOne({entryTitle : req.params.entryTitle}, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Create an entry
router.post('/',(req,res)=>{
    // res.send(`Post method worked`);
    EntryCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    });
    // res.send(req.body);
})

//Update an entry
router.put('/:entryTitle',(req,res)=>{
    // res.send(`Put method worked`);
    EntryCollection.findOneAndUpdate({entryTitle : req.params.entryTitle}, req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    });
})

//Delete an entry
router.delete('/:entryTitle',(req,res)=>{
    // res.send(`Delete method worked`);
    EntryCollection.findOneAndDelete({entryTitle : req.params.entryTitle}, (errors,results)=>{
        errors ? res.send(errors) : res.send(`${req.params.entryTitle} was deleted`)
    });
})

//export router
module.exports = router;