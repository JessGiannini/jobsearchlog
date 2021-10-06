import React from "react";
import '../pages/company/company.css'


 function Card(props) {

  return (
    <div>
      <div>
        <div className="cardContainer">
          <h5 className="cardTitle">{props.jobTitle}</h5>
          <p className="cardContent">{props.description}</p>
            <div className="cardSection"> {props.experinece} </div>
            <div className="cardSection"> {props.city} {props.state}</div>
            <div className="cardSection"> {props.remote} </div>
            <div className="cardSection"> {props.Salary} </div>
            <div className="cardSection"> {props.jobFound} </div>
            <div className="cardSection"> {props.submitted} </div>
        </div>
      </div>
    </div>
  )
}

export default Card;