import React, {useEffect, useState, useRef} from 'react'
import './navBar.css'
import { TbMenu2 } from "react-icons/tb"
import { useNavigate } from 'react-router-dom'

const navLinks = [
    {name:'About Me', path:'/home'},
    {name:'Projects',path:'/project'},
    {name:'Resume',path:'/Resume.pdf'},
    {name:'Contact',path:'/contact'}
]

export default function NavBar({config}) {
    const [menuOpen, setMenu] = useState(false);
    const dropdownMenuRef = useRef(null);
    const menuBtnRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenu(!menuOpen);
    }

    const downloadFile = (url, filename) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        const handleClickOutside = (event) => {
            if(dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target) && !menuBtnRef.current.contains(event.target)){
                setMenu(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown',handleClickOutside);
        };
    }, []);

    const handleOnClick = (item) => {
        if(item.name === 'Resume'){
            downloadFile(navLinks.find(link => link.name === 'Resume').path, "Yingwang's Resume.pdf");
        } 
        else{
            navigate(`${item.path}`);
        } 
    }

    
  return (
    <div>
        <div className='navBar'>
            <div className="logoContainer" >
                <img src={config.logo} alt="logo" className='logo' onClick={()=>navigate('/home')}/>
            </div>
            <div className = 'title'>{config.title}</div>
            <div className="linksContainer">
                <ul className='links'>
                    {navLinks.map((item,index)=>(
                        <li className='link' key={index} onClick={() => handleOnClick(item)}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='btnContainer'  ref={menuBtnRef}>
                <TbMenu2 className='menuBtn' onClick={toggleMenu}/>
            </div>
        </div>

        {menuOpen && (
        <div ref={dropdownMenuRef} className="dropdownMenu">
          <ul className="dropdownContainer">
            {navLinks.map((item, index) => (
              <li className="dropdownLink" key={index} onClick={() => handleOnClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}