import React from 'react';
import '../pages/company/company.css';
import { Link } from 'react-router-dom';

function CompanyCard(props) {
  return (
    <div className="companyCardContainer">
      <Link to={`/company/${props.name}`}>
        <div className="companyCardHeader">{props.name}</div>
        <div className="companyCardDescription">{props.description}</div>
        <div className="companyCardAvailableJobs">
          Jobs Available: {props.jobsLength}
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
