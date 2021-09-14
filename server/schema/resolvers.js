const { User, Company, Job, Contact } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { ID }) => {
      return User.findOne({ ID });
    },
    users: async () => {
      return User.find();
    },
    company: async (parent, { name }) => {
      return Company.findOne({ name }).populate('jobs').populate({
        path: 'jobs',
        populate: 'contact',
      });
    },
    companies: async () => {
      return Company.find().populate('jobs');
    },
    job: async (parent, args) => {
      return Job.findById(args._id).populate('contact');
    },
    jobs: async () => {
      return Job.find().populate('contact');
    },
    contact: async (parent, args) => {
      return Contact.findById(args._id).populate('jobs');
    },
    contacts: async () => {
      return Contact.find().populate('jobs');
    },
  },
};

module.exports = resolvers;
