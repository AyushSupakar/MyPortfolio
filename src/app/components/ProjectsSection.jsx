"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'



function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) =>{
    setTag(newTag);
    
  }
    const projectsData=[
      {
        id:1,
        title:"DC APP",
        description:"An App where you can book construction, home renovation and repair services.",
        image:"/images/projects/dc_app.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/AyushSupakar/dc_app",
        webUrl:"https://expo.dev/preview/update?message=DC%20APP&updateRuntimeVersion=1.0.0&createdAt=2025-03-29T06%3A02%3A28.811Z&slug=exp&projectId=c0b3af4e-63a7-4400-9d1f-dd05b260140e&group=f17faba5-74ef-4a1b-9dce-c0ff9f2acfd0",
    
    },
    {
      id:2,
      title:"Dc APP - Admin Side",
      description:"The Admin Side of DC App",
      image:"/images/projects/dc_admin.png",
      tag:["All","Web"],
      gitUrl:"https://github.com/AyushSupakar/dc_admin",
      webUrl:"https://expo.dev/preview/update?message=DC_Admin&updateRuntimeVersion=1.0.0&createdAt=2025-03-29T05%3A39%3A37.450Z&slug=exp&projectId=b45b253b-badb-4d92-b33e-4a6e6c538321&group=28b6bcca-c65d-4830-b19b-f532baeabcdb ",
  
  },
      {
        id:3,
        title:"Dash Constructions",
        description:"Official Website of Dash Constructions",
        image:"/images/projects/DashConstructions.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/AyushSupakar/DashConstructions",
        webUrl:"http://www.dashconstructions.in",
    
    },
      {
        id:4,
        title:"MyChatApp",
        description:"A Real Time Chatting Application.",
        image:"/images/projects/MyChatApp.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/AyushSupakar/MyChatAppFront",
        webUrl:"https://mychatapp-eight.vercel.app",
    
    },
        {
            id:5,
            title:"EComMars",
            description:"This is the User end of my E-Commerce Website.",
            image:"/images/projects/EComMars.png",
            tag:["All","Web"],
            gitUrl:"https://github.com/AyushSupakar/ECOMMARS_userend",
            webUrl:"https://ecommars-userend.vercel.app/",
        
    },
    {
        id:6,
        title:"EComMars: AdminSide",
        description:"This is the Admin Side of my E-Commerce Website.",
        image:"/images/projects/EComMars_AdminSide.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/AyushSupakar/ECOMMARS_adminside",
        webUrl:"https://ecommars-adminside.vercel.app/",
    
},
{
    id:7,
    title:"MewosicPlayer",
    description:"Its a Music Player.",
    image:"/images/projects/MewosicPlayer.png",
    tag:["All","Web"],
    gitUrl:"https://github.com/AyushSupakar/MeowsicPlayer",
    webUrl:"https://ayushsupakar.github.io/MeowsicPlayer/",

},
{
  id:8,
  title:"SME, NIT Rourkela",
  description:"The official website of Society of Mining and Metallurgical Exploration, students chapter, NIT Rourkela.",
  image:"/images/projects/SME.png",
  tag:["All","Web"],
  gitUrl:"https://github.com/AyushSupakar/SME-NIT-Rourkela",
  webUrl:"https://smenitrkl.com/",

},
{
    id:9,
    title:"Snakeyy",
    description:"It is the Classic Snake Game.",
    image:"/images/projects/Snakeyy.png",
    tag:["All","Java", "Games"],
    gitUrl:"https://github.com/AyushSupakar/Snakeyy",
    webUrl:"https://github.com/AyushSupakar/Snakeyy",

},
{
    id:10,
    title:"Rec4U",
    description:"A recommendation website for movies, songs and tv shows.",
    image:"/images/projects/Rec4U.png",
    tag:["All","Web"],
    gitUrl:"https://github.com/AyushSupakar/Movies-Songs-and-TV-Shows-Recomandation-Website",
    webUrl:"https://ayushsupakar.github.io/Movies-Songs-and-TV-Shows-Recomandation-Website/",

},
{
    id:11,
    title:"Breakfast",
    description:"A 3D modelling of a breakfast plate.",
    image:"/images/projects/Breakfast.png",
    tag:["All","3D"],
    gitUrl:"https://github.com/AyushSupakar/3D-Modelling",
    webUrl:"https://www.artstation.com/artwork/6NKYLN",

},
{
    id:12,
    title:"Department Building",
    description:"A 3D modelling of the chemical department of my University.",
    image:"/images/projects/Department_Building.png",
    tag:["All","3D"],
    gitUrl:"https://github.com/AyushSupakar/3D-Modelling",
    webUrl:"https://www.artstation.com/artwork/49wm1Y",

},
{
  id:13,
  title:"Portfolio",
  description:"My Portfolio website.",
  image:"/images/projects/Portfolio.png",
  tag:["All","Web"],
  gitUrl:"https://github.com/AyushSupakar/MyPortfolio",
  webUrl:"https://my-portfolio-seven-steel-44.vercel.app/",

}
]
const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag))
  return (
    <section className='mt-4 py-4' id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"} />
        
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==="Web"} />
       
        <ProjectTag onClick={handleTagChange} name="3D" isSelected={tag==="3D"} />

        <ProjectTag onClick={handleTagChange} name="Games" isSelected={tag==="Games"} />
        </div>

      <div className="mx-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} webUrl={project.webUrl}/>)}
      </div>
    </section>
  )
}

export default ProjectsSection
