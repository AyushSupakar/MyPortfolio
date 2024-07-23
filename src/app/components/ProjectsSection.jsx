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
            title:"EComMars",
            description:"This is the User end of my E-Commerce Website.",
            image:"/images/projects/EComMars.png",
            tag:["All","Web"],
            gitUrl:"https://github.com/AyushSupakar/ECOMMARS_userend",
            webUrl:"https://ecommars-userend.vercel.app/",
        
    },
    {
        id:2,
        title:"EComMars: AdminSide",
        description:"This is the Admin Side of my E-Commerce Website.",
        image:"/images/projects/EComMars_AdminSide.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/AyushSupakar/ECOMMARS_adminside",
        webUrl:"https://ecommars-adminside.vercel.app/",
    
},
{
    id:3,
    title:"MewosicPlayer",
    description:"Its a Music Player.",
    image:"/images/projects/MewosicPlayer.png",
    tag:["All","Web"],
    gitUrl:"https://github.com/AyushSupakar/MeowsicPlayer",
    webUrl:"https://ayushsupakar.github.io/MeowsicPlayer/",

},
{
  id:4,
  title:"SME, NIT Rourkela",
  description:"The official website of Society of Mining and Metallurgical Exploration, students chapter, NIT Rourkela.",
  image:"/images/projects/SME.png",
  tag:["All","Web"],
  gitUrl:"https://github.com/AyushSupakar/SME-NIT-Rourkela",
  webUrl:"https://smenitrkl.com/",

},
{
    id:5,
    title:"Snakeyy",
    description:"It is the Classic Snake Game.",
    image:"/images/projects/Snakeyy.png",
    tag:["All","Java", "Games"],
    gitUrl:"https://github.com/AyushSupakar/Snakeyy",
    webUrl:"https://github.com/AyushSupakar/Snakeyy",

},
{
    id:6,
    title:"Rec4U",
    description:"A recommendation website for movies, songs and tv shows.",
    image:"/images/projects/Rec4U.png",
    tag:["All","Web"],
    gitUrl:"https://github.com/AyushSupakar/Movies-Songs-and-TV-Shows-Recomandation-Website",
    webUrl:"https://ayushsupakar.github.io/Movies-Songs-and-TV-Shows-Recomandation-Website/",

},
{
    id:7,
    title:"Breakfast",
    description:"A 3D modelling of a breakfast plate.",
    image:"/images/projects/Breakfast.png",
    tag:["All","3D"],
    gitUrl:"https://github.com/AyushSupakar/3D-Modelling",
    webUrl:"https://www.artstation.com/artwork/6NKYLN",

},
{
    id:8,
    title:"Department Building",
    description:"A 3D modelling of the chemical department of my University.",
    image:"/images/projects/Department_Building.png",
    tag:["All","3D"],
    gitUrl:"https://github.com/AyushSupakar/3D-Modelling",
    webUrl:"https://www.artstation.com/artwork/49wm1Y",

},
{
  id:9,
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
