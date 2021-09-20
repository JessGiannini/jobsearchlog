import { gql } from '@apollo/client';

export const ADD_COMPANY = gql`
  mutation addCompany($name: String!, $description: String!) {
    addCompany(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob(
    $jobTitle: String!
    $description: String!
    $experience: String!
    $city: String!
    $state: String!
    $remote: Boolean
    $jobFound: String
    $salary: String
    $submitted: Boolean!
    $companyId: ID
  ) {
    addJob(
      jobTitle: $jobTitle
      description: $description
      experience: $experience
      city: $city
      state: $state
      remote: $remote
      jobFound: $jobFound
      salary: $salary
      submitted: $submitted
      companyId: $companyId
    ) {
      _id
      jobTitle
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact(
    $name: String!
    $email: String!
    $phone: String
    $jobId: ID!
  ) {
    addContact(name: $name, email: $email, phone: $phone, jobId: $jobId) {
      _id
      name
    }
  }
`;
export const ADD_NOTE = gql`
  mutation addNote($title: String!, $content: String) {
    addNote(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation deleteContact($_id: ID!) {
    deleteContact(contactId: $_id) {
      _id
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($_id: ID!) {
    deleteJob(jobId: $_id) {
      _id
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation deleteCompany($_id: ID!) {
    deleteCompany(companyId: $_id) {
      _id
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(noteId: $_id) {
      _id
    }
  }
`;
