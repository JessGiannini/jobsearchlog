import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_COMPANY } from '../../utils/queries.js';
import Card from '../../components/Card';

import './company.css'


function CompanyPage() {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_COMPANY, {
    variables: { name: name },
  });

  const company = data?.company || {};
  console.log('COMPANY DATA', company);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="companyPageContainer">
      <div className="companyHeader">COMPANY{company.name}</div>
      <div>{company.description}</div>
      <div>
        {company.jobs.map((job) => (
          <Card
            jobTitle={job.jobTitle}
            description={job.description}
            key={job._id}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
