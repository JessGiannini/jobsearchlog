const { Schema, model } = require('mongoose');

const companySchema = new Schema ({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Job'
      }
  ],
});

const Company = model('Company', companySchema);

module.exports = Company;
