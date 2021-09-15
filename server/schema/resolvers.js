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
    //double .populate to funnel down two levels = company => jobs => contact, path: 'jobs' used to drill through that layer to contact
    companies: async () => {
      return Company.find().populate('jobs').populate({
        path: 'jobs',
        populate: 'contact',
      });
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
    Mutation: {
    addCompany: async (parent, { name, description }) => {
      return Company.create({ name, description });
    },
    addJob: async (parent, { jobTitle, description, experience, city, state, remote, jobFound, salary, submitted, companyId }) => {
        const job = await Job.create({ jobTitle, description, experience, city, state, remote, jobFound, salary, submitted, companyId });
        // findOneAndUpdate is a mongo method that finds one and edits it if it exits AND $addToSet pushes an object into another database
        const company = await Company.findOneAndUpdate(
          { _id: companyId },
          { $addToSet: { jobs: job._id }},
        );        
        // console.log("=====ID=====", job._id);
        // console.log("COMPANY JOB", Company.jobs);
      return job
    },
    addContact: async (parent, { name, email, phone, jobId }) => {
        const contact = await Contact.create({ name, email, phone, jobId })
        const jobContact = await Job.findOneAndUpdate(
          { _id: jobId },
          { $set: { contact: contact._id }},
        );    
      return contact
    },
    deleteCompany: async (parent, { companyId }) => {
      return Company.findOneAndDelete({ _id: companyId });
    },
    deleteJob: async (parent, { jobId }) => {
      return Job.findOneAndDelete({ _id: jobId });
    },
    deleteContact: async (parent, { contactId }) => {
      return Contact.findOneAndDelete({ _id: contactId });
    },

    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },

};

module.exports = resolvers;
