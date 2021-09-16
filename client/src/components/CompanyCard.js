import React from 'react';

function CompanyCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Jobs Available: {props.jobsLength}</p>
    </div>
  );
}

export default CompanyCard;
