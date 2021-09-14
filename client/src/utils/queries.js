import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      password
    }
  }
`;

export const QUERY_USER = gql`
  query oneUser($_id: ID!) {
    user(_id: $_id) {
      _id
      name
      password
    }
  }
`;

export const QUERY_COMPANIES = gql`
  query allCompanies {
    companies {
      _id
      name
      description
      jobs {
        _id
        jobTitle
        description
        experience
        city
        state
        remote
        jobFound
        salary
        submitted
        contact {
          _id
        }
      }
    }
  }
`;

export const QUERY_COMPANY = gql`
  query company($name: String!) {
    company(name: $name) {
      _id
      name
      description
      jobs {
        _id
        jobTitle
        description
        experience
        city
        state
        remote
        jobFound
        salary
        submitted
        contact {
          _id
          name
          email
          phone
        }
      }
    }
  }
`;

export const QUERY_JOB = gql`
  query ($_id: ID!) {
    job(_id: $_id) {
      _id
      jobTitle
      description
      experience
      city
      state
      remote
      jobFound
      salary
      submitted
      contact {
        _id
        name
        email
        phone
      }
    }
  }
`;

export const QUERY_JOBS = gql`
  query Jobs {
    jobs {
      _id
      jobTitle
      description
      experience
      city
      state
      remote
      jobFound
      salary
      submitted
      contact {
        _id
        name
        email
        phone
      }
    }
  }
`;

export const QUERY_CONTACT = gql`
  query contact($_id: ID!) {
    contact(_id: $_id) {
      _id
      name
      email
      phone
      jobs {
        _id
        jobTitle
        description
        experience
        city
        state
        remote
        jobFound
        salary
        submitted
      }
    }
  }
`;

export const QUERY_CONTACTS = gql`
  query contacts {
    contacts {
      _id
      name
      email
      phone
      jobs {
        _id
        jobTitle
        description
        experience
        city
        state
        remote
        jobFound
        salary
        submitted
      }
    }
  }
`;
