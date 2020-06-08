import React from "react";
import proj from "../proj";
import Task from "./Task";

function createTask(projItem){
  return(
    <Task
      key = {projItem.id}
      image = {projItem.image}
      alt = {projItem.alt}
      head = {projItem.head}
      title = {projItem.title}
      tag = {projItem.tag}
      web = {projItem.web}
    />
  )
}



function Project (){
    return(
<div id="projects" className="container">
    <div className="proj-title">
      <h3>Projects Demo</h3>
      <br/>
      <p>
        &ldquo;As practice makes perfect, I can not but make progress; each drawing one makes, each study one paints, is a step forward.&rdquo;<br />- Vincent van Gogh
      </p>

    </div>

    <div className="row">
        {proj.slice(0,2).map(createTask)}
    </div>
    <div className="row">
        {proj.slice(2,4).map(createTask)}
    </div>

  </div>
    )
}

export default Project;
