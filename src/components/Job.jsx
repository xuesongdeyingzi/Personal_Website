import React from "react";

function Job(props) {
    return(
    <div className="col-md-4">
      <div className="card ele h-100">
        <div className="card-body">
          <span className={props.icon}></span>
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
    );
}

export default Job;