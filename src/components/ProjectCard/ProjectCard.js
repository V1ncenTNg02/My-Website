import React from 'react'
import './ProjectCard.css'



export default function ProjectCard( project ) {
  const { projectName, role, projectDesc, githubLink, deployedLink, img } = project.project;
  const handleClick = (item) => {
    window.location.href = item.deployedLink;
  }
  console.log(img);
  return (
    <div className='ProjectCard'>
      <div className='infoSection'>
        <h3 className='projectName'>{projectName}</h3>
        <div className='roleName'> {role}</div>
        <p id = "projectDescription">{projectDesc}</p>
        <div className='bottomSection'>
          <div className='projectLinks'>
            <a className='externalLink' href={githubLink}>Github </a>
          </div>
          <button className='exploreBtn' onClick = {()=>handleClick({deployedLink})}>Explore</button>
        </div>
      </div>
      <div className='imageSection'><img src = {img} alt = {projectName} className='projectImgs'></img></div>
    </div>
  )
}