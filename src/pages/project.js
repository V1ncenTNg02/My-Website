import React from 'react'
import NavBar from '../components/navBar/navBar'
import {projectInfo, webConfig} from '../configs/webContentConfig'
import './pages.css'
import MidTitle from '../components/MidTitle/MidTitle'
import ProjectCard from '../components/ProjectCard/ProjectCard'


export default function project() {

  return (
    <div id="projectPage">
      <NavBar config={webConfig.nav}/>
      <MidTitle/>
      <div className = "projectCards">
        {projectInfo.map((project, index) => {
          return(
            <div className = "projectContainer">
              <ProjectCard project = {project}/>
            </div>
          )
        })}
      </div>
      

    </div>
  )
}
