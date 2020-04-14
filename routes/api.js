//create route
let express = require('express');
let router = express.Router();

//Read all entries
router.get('/',(req,res)=>{
    res.send(`Get all method worked`);
})

//Read entry by title
router.get('/:entry_id',(req,res)=>{
    res.send(`Get by title method worked`);
})

//Create an entry
router.post('/',(req,res)=>{
    res.send(`Post method worked`);
})

//Update an entry
router.put('/:entry_id',(req,res)=>{
    res.send(`Put method worked`);
})

//Delete an entry
router.delete('/:entry_id',(req,res)=>{
    res.send(`Delete method worked`);
})

//export router
module.exports = router;