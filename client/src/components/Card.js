import React from "react";

 function Card(props) {

  return (
    <div>
      <div>
        <div>
          <h5>{props.jobTitle}</h5>
          <p>{props.description}</p>
             {props.jobTitle}
        </div>
      </div>
    </div>
  )
}

export default Card;