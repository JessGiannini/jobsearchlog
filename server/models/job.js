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
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
  contact: 
  
      {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
      }
    
});

const Job = model('Job', jobSchema);

module.exports = Job;
