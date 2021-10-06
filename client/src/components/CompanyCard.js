import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/company/company.css';

function CompanyCard(props) {
  return (
    <div className="companyCardContainer">
      <div className="companyCardHeader">{props.name}</div>
      <div className="companyCardDescription">{props.description}</div>
      <div className="companyCardAvailableJobs">
        Jobs Available: {props.jobsLength}
      </div>

      <Link to={`/company/${props.name}`}>
        <button type="submit">Explore {props.name}</button>
      </Link>
    </div>
  );
}

export default CompanyCard;
