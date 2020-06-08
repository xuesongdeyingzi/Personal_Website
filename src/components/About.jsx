import React from "react";
import Level from "./Level";
import skill from "../skill";

function createLevel(skillTerm){
  return(
    <Level
      key= {skillTerm.id}
      name = {skillTerm.name}
      star = {skillTerm.star}
    />
  );
}



function About() {
    return(
        <div id="about">
        <div className="py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3>About Me</h3>
              <p className="my-3"> Hello! </p>
              <p className="my-3">I'm a data professional with over 7 years of experience specializing in programming and statistics.</p>
              <p className="my-3">I have a solid background and a profound understanding of machine learning algorithms.</p>
              <p className="my-3">Besides dealing with numbers, I also love ploting beautiful visualizations.</p>
              <p className="my-3">Recently, I learned full stack web development and got fascinated by it.</p>
              <p className="my-3">Even if this site was built by my own, I'm acutally a team player too.</p>
              <p className="my-3">Like Helen Keller said: "Alone we can do so little; together we can do so much."</p>
              <p className="my-3">In my spare time, I like drawing, cooking and traveling.</p>
      
            </div>
      
            <h4>Skills</h4>
            <div className="row">
      
              <div className="col-md-4">
      
                <ul className="no-bullets">
                  <div>{skill.slice(0,5).map(createLevel)} </div>
                </ul>
              </div>
      
              <div className="col-md-4">
                <ul className="no-bullets">
                <div>{skill.slice(5,10).map(createLevel)} </div>
                </ul>
              </div>
      
              <div className="col-md-4">
                <ul className="no-bullets">
                <div>{skill.slice(10,15).map(createLevel)} </div>
                </ul>
              </div>
      
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;

