const { User, Company, Job } = require('../models');

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
            return Job.findOne({ID}).populate("company")
        },
        jobs: async() => {
            return Job.find().populate("company")
        },
    }
};

module.exports = resolvers;
