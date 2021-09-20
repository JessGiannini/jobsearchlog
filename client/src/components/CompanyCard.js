import React from 'react';
import '../pages/company/company.css'

function CompanyCard(props) {
  return (
    <div className="companyCardContainer">
      <div className="companyCardHeader">{props.name}</div>
      <div className="companyCardDescription">{props.description}</div>
      <div className="companyCardAvailableJobs">Jobs Available: {props.jobsLength}</div>
    </div>
  );
}

export default CompanyCard;
