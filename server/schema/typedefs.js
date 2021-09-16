const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    password: String!
  }
  type Company {
    _id: ID!
    name: String!
    description: String!
    jobs: [Job]
  }
  type Job {
    _id: ID!
    jobTitle: String!
    description: String!
    experience: String!
    city: String!
    state: String!
    remote: Boolean
    jobFound: String
    salary: String
    submitted: Boolean!
    contact: Contact
  }
  type Contact {
    _id: ID!
    name: String
    email: String
    phone: String
    jobs: [Job]
  }
  type Notes {
    _id: ID!
    title: String
    content: String
  }
  type Query {
    user(_id: ID!): User
    users: [User]
    company(name: String): Company
    companies: [Company]
    job(_id: ID!): Job
    jobs: [Job]
    contact(_id: ID!): Contact
    contacts: [Contact]
    note(_id: ID!): Notes
    notes: [Notes]
  }
  type Mutation {
    addCompany(name: String!, description: String!) : Company
    addJob(jobTitle: String!, description: String!, experience: String!, city: String!, state: String!, remote: Boolean, jobFound: String, salary: String, submitted: Boolean!, companyId: ID ): Job
    addContact( name: String!, email: String!, phone: String, jobId: ID!): Contact
    deleteCompany(companyId: ID!) : Company
    deleteJob(jobId: ID!) : Job
    deleteContact(contactId: ID!) : Contact
  }
`;

module.exports = typeDefs;
