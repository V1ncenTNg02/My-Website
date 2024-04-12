import React from 'react'
import "./PhotoCard.css"
import {LuLinkedin, LuInstagram, LuMail} from "react-icons/lu";

export default function PhotoCard({config}) {
  return (
    <div className='photoCard'>
      <div className = 'photoContainer'>
        <img src = {config.photo} alt = 'myPhoto' className = 'photo'/>
      </div>
      <div className = 'myName'>
        {config.name}
      </div>
      <div className='role'>
        {config.role}
      </div>
      <footer className = 'foot'>
        <ul className = 'socialContainer'>
          <a href="https:www.linkedin.com/in/yingwang-ng-14b29725b" target="_blank" rel="noreferrer">
            <LuLinkedin className='socialIcon'/>
          </a>
          <a href="https:www.linkedin.com/in/yingwang-ng-14b29725b" target="_blank" rel="noreferrer">
            <LuInstagram className='socialIcon'/>
          </a>
          <a href="https:www.linkedin.com/in/yingwang-ng-14b29725b" target="_blank" rel="noreferrer">
            <LuMail className='socialIcon'/>
          </a>
        </ul>
      </footer>
    </div>
  )
}
