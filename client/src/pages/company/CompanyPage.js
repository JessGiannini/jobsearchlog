import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_COMPANY } from '../../utils/queries.js';


function CompanyPage() {
  const { name } = useParams();

  const { loading, data } = useQuery( QUERY_COMPANY , {
    variables: { name: name },
  });

  const company = data?.company || {};
  console.log("COMPANY DATA", company);

  if (loading) {
    return <div>Loading...</div>;
  }
    return (
        <div>
            <div className="companyHeader">COMPANY{company.name}</div>
        </div>
    )
}

export default CompanyPage;
