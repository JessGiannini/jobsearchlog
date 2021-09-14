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
  type Query {
    user(_id: ID!): User
    users: [User]
    company(name: String): Company
    companies: [Company]
    job(_id: ID!): Job
    jobs: [Job]
    contact(_id: ID!): Contact
    contacts: [Contact]
  }
`;

module.exports = typeDefs;
