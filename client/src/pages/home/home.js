import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMPANIES } from '../../utils/queries';
import CompanyCard from '../../components/CompanyCard';

function Home() {
  const { loading, data } = useQuery(QUERY_COMPANIES);
  const companies = data?.companies || {};

  console.log('companies', companies);

  return (
    <div>
      <section>HOME</section>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        companies.map((company) => (
          <div>
            <CompanyCard
              name={company.name}
              description={company.description}
              key={company._id}
              jobsLength={company.jobs.length}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
