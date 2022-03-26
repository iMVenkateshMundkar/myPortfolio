var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-62px";
  }
  prevScrollpos = currentScrollPos;
}



import html from "../assets/skills/html5.png";
import css from "../assets/skills/css3.png";
import javaScript from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import router from "../assets/skills/reactRouter.png";
import node from "../assets/skills/nodejs.png";
import mongo from "../assets/skills/mongodb.png";
import express from "../assets/skills/expressjs.png";
import git from "../assets/skills/git.png";
let skillData = [
    {
        "name" : "HTML5",
        "imgUrl": html
    },
    {
        "name" : "CSS3",
        "imgUrl": css
    },
    {
        "name" : "JAVASCRIT",
        "imgUrl": javaScript
    },
    {
        "name" : "REACT",
        "imgUrl": react
    },
    {
        "name" : "REDUX",
        "imgUrl": redux
    },
    {
        "name" : "ROUTER",
        "imgUrl": router
    },
    {
        "name" : "NODE.JS",
        "imgUrl": node
    },
    {
        "name" : "MONGODB",
        "imgUrl": mongo
    },
    {
        "name" : "EXPRESS",
        "imgUrl" : express
    },
    {
        "name" : "Git",
        "imgUrl": git
    }
]

let skillDiv = document.querySelector("#allSkills")
skillData.forEach((ele) => {
    let div = document.createElement('div');
    let skillImg = document.createElement('img');
    let skillName = document.createElement('p');
    skillImg.src = ele.imgUrl;
    skillName = ele.name;
    div.append(skillImg, skillName);
    skillDiv.append(div);
})

import fabImg from "../assets/projects/fabindia.png";
import paytmImg from "../assets/projects/paytmmall.png";
import gitImg from "../assets/icon/githubIcon.png";
import deployImg from "../assets/icon/deployIcon.jpg"

let projectData = [
    {
        "name": "Fabindia-Clone",
        "imgUrl": fabImg,
        "desc" : "FabIndia is an e-commerce platform where user can buy clothes and home garment.In it there are many category of clothes. User can add as many as products in his/her cart and buy them",
        "tech" : ["HTML", "CSS", "Javascript"],
        "gitLink": "https://github.com/sameerah2710/fabindia_masai",
        "deployLink": "https://fabindia-mainclone.netlify.app/"
    },
    {
        "name": "PaytmMall-Clone",
        "imgUrl": paytmImg,
        "desc": "PaytmMall is an e-commerce platform where users can find different kinds of products from various categories. Users can add as many as products cart and place the order.",
        "tech": ["HTML", "CSS", "Javascript"],
        "gitLink": "https://github.com/sameerah2710/PaytmMall-clone",
        "deployLink": "https://suspicious-wing-0660d2.netlify.app/"
    }
]
let projectDiv = document.querySelector("#allProjects");
projectData.forEach((ele) => {
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div1.setAttribute("class", "leftProject");
    let div2 = document.createElement('div');
    div2.setAttribute("class", "rightProject");
    let img = document.createElement('img');
    img.src = ele.imgUrl;
    let name = document.createElement('p');
    name.setAttribute("class", "name");
    name.innerText = ele.name;
    let desc = document.createElement('p');
    desc.setAttribute("class", "desc");
    desc.innerText = ele.desc;
    let techDiv = document.createElement('div');
    techDiv.setAttribute("class", "tech");
    ele.tech.forEach((eTech) => {
        let p = document.createElement('p');
        p.innerText = eTech;
        techDiv.append(p);
    })
    let linkDiv = document.createElement('div');
    let gitAnch = document.createElement('a');
    let git = document.createElement('img');
    git.setAttribute("class", "linkImg");
    git.src = gitImg;
    gitAnch.href = ele.gitLink;
    gitAnch.target = "_blank";
    let deployAnch = document.createElement('a');
    let deploy = document.createElement('img');
    deploy.setAttribute("class", "linkImg");
    deploy.src = deployImg;
    deployAnch.href = ele.deployLink;
    deployAnch.target = "_blank";
    gitAnch.appendChild(git);
    deployAnch.appendChild(deploy);
    linkDiv.append(gitAnch, deployAnch);
    div1.append(img);
    // div2.append(name, desc, tech, linkDiv);
    div2.append(name, desc, techDiv, linkDiv);
    div.append(div1, div2);
    projectDiv.append(div)
});

import linkedInImg from "../assets/icon/linkedinIcon.png";
import emailImg from "../assets/icon/emailIcon.jpg";
import phoneImg from "../assets/icon/phoneIcon.png";

let contactData = [
    {
        "imgUrl": emailImg,
        "linkUrl": "mailto: mundkarvenkatesh@gmail.com"
    },
    {
        "imgUrl": phoneImg,
        "linkUrl": "tel: 7218469333"
    },
    {
        "imgUrl": gitImg,
        "linkUrl": "https://github.com/iMVenkateshMundkar"
    },
    {
        "imgUrl": linkedInImg,
        "linkUrl": "https://www.linkedin.com/in/venkatesh-mundkar-2487b91b3/"
    }
]

let contactDiv = document.querySelector("#links");
contactData.forEach((ele) => {
    let anchor = document.createElement('a');
    let img = document.createElement('img');
    img.src = ele.imgUrl;
    anchor.href = ele.linkUrl;
    anchor.target = "_blank";
    anchor.append(img);
    contactDiv.append(anchor);
});

