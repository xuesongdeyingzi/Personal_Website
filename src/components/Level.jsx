import React from "react";

function Level(props){
    const numStar = props.star;
    if (numStar==="one") {
        return(
            <li>
            <span className="ability-title">{props.name} </span>
            <span className="ability-score">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </span>
          </li>
        )
    } else if (numStar === "half"){
        return(
            <li>
            <span className="ability-title">{props.name} </span>
            <span className="ability-score">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            </span>
          </li>   
        )
    } else if (numStar === "zero"){
        return(
            <li>
            <span className="ability-title">{props.name} </span>
            <span className="ability-score">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            
            </span>
          </li> 
        )
    };
}

export default Level;