import React from 'react'
import './ProjectCard.css'


export default function ProjectCard( project ) {
  console.log('ProjectCard props:', project);
  const { projectName, role, projectDesc, githubLink, deployedLink } = project.project;
  return (
    <div className='ProjectCard'>
      <div className='infoSection'>
        <h3 className='projectName'>{projectName}</h3>
        <div className='roleName'> {role}</div>
        <p id = "projectDescription">{projectDesc}</p>
        <div className='bottomSection'>
          <div className='projectLinks'>
            <div className='githubLink'>Github: {githubLink}</div>
            <div className='deployedVersion'>Deployed:{deployedLink}</div>
          </div>
          <button className='exploreBtn'>Explore</button>
        </div>
      </div>
      <div className='imageSection'></div>
    </div>
  )
}