import React from "react";
import imgChaan from "./images/chaan.jpg";
import Job from "./Job";
import position from "../position";

function createJob(posTerm){
  return(
    <Job
      key= {posTerm.id}
      title = {posTerm.title}
      text = {posTerm.text}
      icon = {posTerm.icon}
    />
  );
}

function Feature(){
    return (
<div id="features">

<div className="container" style={{backgroundImage: `url(${imgChaan})`}} >
  <div className="heading text-center mx-auto">
    <h3 className="head">I'm Available For Hire</h3>
    <p className="head">
      &ldquo;You can dream, create, design and build the most wonderful place in the world…but it requires people to make the dream a reality.&rdquo;
      <br/>
      - Walt Disney
    </p>

  </div>
  <div className="cards3 row text-center mt-5 pt-3">
      {position.map(createJob)}
  </div>
 </div>
</div>
    );
}

export default Feature;