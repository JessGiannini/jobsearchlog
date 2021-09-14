const { User, Company, Job, Contact } = require('../models');

const resolvers = {
    Query: {
        user: async(parent, {ID}) => {
            return User.findOne({ID})
        }, 
        users: async() => {
            return User.find()
        },
        company: async(parent, {name}) => {
            return Company.findOne({name}).populate("jobs")
        },
        companies: async() => {
            return Company.find().populate("jobs")
        },
        job: async(parent, {ID}) => {
            return Job.findOne({ID}).populate("company").populate({path: "contact", populate: "contact"})
        },
        jobs: async() => {
            return Job.find().populate("company").populate({path: "contact", populate: "contact"})
        },
        contact: async(parent, {ID}) => {
            return Contact.findOne({ID}).populate("jobs")
        },
        contacts: async() => {
            return Contact.find().populate("jobs")
        }
    }
};

module.exports = resolvers;
