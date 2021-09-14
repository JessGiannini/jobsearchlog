const { Schema, model } = require('mongoose');

const contactSchema = new Schema ({
  name: {
    type: String,
    required: true,
    trim: true,
  },
    email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
    phone: {
        type: String,
        trim: true,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Must match a valid phone number!"
        ],
    }, 
     jobs: 
     [
       {
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;
