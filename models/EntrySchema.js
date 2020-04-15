//Import model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//define schema/ new instance of schema
let EntrySchema = new Schema(
    {
        entryTitle : String,
        entryAuthor : String,
        entryReadTime : Number,
    }
)




//export
module.exports = mongoose.model('entry200414', EntrySchema);