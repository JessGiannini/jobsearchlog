const { Schema, model } = require('mongoose');

const jobSchema = new Schema ({
  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  remote: {
    type: Boolean,
  },
  jobFound: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
    trim: true,
  },
  submitted: {
      type: Boolean,
      required: true,
  },
  contact: {
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
     },
    phone: {
        type: String,
        unique: true,
        trim: true,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Must match a valid phone number!"
        ],
    }, 
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  }

});

const Job = model('Job', jobSchema);

module.exports = Job;
