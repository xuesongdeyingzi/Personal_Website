import React from "react";


function Task(props){

    return(
    <div className="col-md-6 col-sm-12 col-xs-12">
      <figure className="effect">
        <img src={require("./images/"+props.image)} alt={props.alt}/>

        <figcaption>
          <h3>{props.head} </h3>
          <p>{props.title} </p>
          <p><strong>Tags:</strong> <br />{props.tag} </p>
          <a href={require("../documents/"+props.web)} target="_blank">View More</a>
          <span className="icon">
            <span className="fas fa-external-link-alt"></span>
          </span>
        </figcaption>
      </figure>
    </div>
    )
}

export default Task;


      