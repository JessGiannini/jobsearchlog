const { Schema, model} = require('mongoose');

const notesSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    }
});

const Notes = model('Notes', notesSchema);

module.exports = Notes;