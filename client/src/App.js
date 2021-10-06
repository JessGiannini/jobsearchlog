import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';
// import logo from './logo.svg';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CompanyPage from './pages/company/CompanyPage';
import Home from './pages/home/Home';
import CompanyForm from './components/CompanyForm';
import JobForm from './components/JobForm';
import ContactForm from './components/ContactForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route exact path="/company/:name">
            <CompanyPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add/company">
            <CompanyForm />
          </Route>
          <Route exact path="/add/job">
            <JobForm />
          </Route>
          <Route exact path="/add/contact">
            <ContactForm />
          </Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
