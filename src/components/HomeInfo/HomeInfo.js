import React from 'react';
import './HomeInfo.css';
import { useNavigate } from 'react-router-dom';
import {webConfig} from '../../configs/webContentConfig'

function downloadFile(url, filename) {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
}

export default function HomeInfo() {
  const navigate = useNavigate();
  const info = webConfig.homeInfo;
  return (
    <div className="HomeInfo">
      <h2 className="heading">{info.heading}</h2>
      <div className="description">{info.description}</div>
      <div className="links">
        <button className="resume" type="button" onClick={() => downloadFile(info.url1, "Yingwang's Resume.pdf")}>
          {info.link1}
        </button>
        <button className="projects" type="button" onClick={() => navigate(info.url2)}>
          {info.link2}
        </button>
      </div>
      <div className="text">{info.text}</div>
    </div>
  );
}
