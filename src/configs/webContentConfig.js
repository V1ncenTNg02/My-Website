import Logo from "../assets/Vincent/Signature.png"
import Photo from "../assets/Vincent/myPhoto.jpg"
import LinkedIn from '../assets/socialIcons/linkedIn.svg'
import Instagram from '../assets/socialIcons/ins.svg'
import Email from '../assets/socialIcons/email.svg'
import NextIDO from '../assets/projects/Next-IDO.png'
import Fyto from '../assets/projects/Fyto.png'
import VisCAT from '../assets/projects/Vis-CAT.png'

export const webConfig = {
    "nav":{
        "logo":Logo,
        "title":"Yingwang's Website"
    },
    "photoCard":{
        "photo":Photo,
        "name":"Yingwang Ng",
        "nameEng":"Vincent",
        "role":"Fullstack Developer",
        "socials":[
            {"name":"LinkedIn",
            "link":'https://www.linkedin.com/in/yingwang-ng-14b29725b'},
            {"name":"Instagram",
            "link":'https://www.instagram.com/vincentalwaysoffline'},
            {"name":"Email",
            "link":'mailto:wuyinghong0323@gmail.com?subject=Connect with Vincent'}
        ],
        "socialIcons":[
            LinkedIn,
            Instagram,
            Email
        ]
    },
    "homeInfo":{
        heading: 'Hello World!',
        description: 'Amani Nakupenda',
        link1: 'Resume',
        url1: '/Resume.pdf',
        link2: 'Projects',
        url2: '/project',
        text: 'Hi! This is Yingwang, an enthusiastic developer, a food lover and excellent chef at home, an unprofessional photographer, and a reader. Feel free to navigate my website. This website is under continuous development and some amazing functions are coming out soon.',
      }
}

export const projectInfo= [
    {
    projectName: "Next IDO", 
    role:"Frontend Developer",
    projectDesc: "An IDO platform for web3 game investment",
    githubLink:"https://github.com/V1ncenTNg02/next-ido",
    deployedLink:"https://next-ido.vercel.app/en/",
    img:NextIDO
    },
    {
    projectName: "Fyto iOS App", 
    role:"Full-stack Developer",
    projectDesc: "An iOS app for wildfire tracking and devices control",
    githubLink:"",
    deployedLink:"",
    img:Fyto
    },
    {
    projectName: "Vis-CAT Website Game", 
    role:"Frontend Developer",
    projectDesc: "Website based game for visual disability detection",
    githubLink:"https://github.com/V1ncenTNg02/Vis-CAT-99",
    deployedLink:"https://deploy.d3ltskl8ryle97.amplifyapp.com/Lobby",
    img:VisCAT
    }
  ]