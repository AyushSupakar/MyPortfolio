"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
const TAB_DATA = [
  {
    title:"Skills",
    id: "skills",
    content:(

      <div className="flex flex-wrap gap-4 text-sm sm: justify-around sm: flex-grow">
        
        <div className="w-32">
            
            <ul className='list-disc pl-1'>
              <li>HTML5, CSS3</li>
              <li>JavaScript</li>
              <li>ReactJs, NextJs</li>
              <li>NextAuth, Google Oauth</li>
              <li>JQuery, Tailwind, BootStrap</li>
              <li>NextUi, Shadcn-ui</li>
              <li>Canva, Wix Studio</li>
              <li>Git, Github</li>
              
              
            </ul>

        </div>
        <div className="">
            <ul className='list-disc pl-1'>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgresSQL</li>
              <li>Redis Stream Adapter</li>
              <li>Kafka</li>
              <li>Axios</li>
              <li>Socket.io</li>
              <li>Prisma</li>
              <li>Vercel</li>
            </ul>

        </div>
        <div className="">
            <ul className='list-disc pl-1'>
              <li>Java</li>
              <li>SpringBoot</li>
              <li>Java Swing</li>
              <li>JSP, Servlets</li>
              <li>Spring MVC</li>
              <li>Apache TomCat</li>
              <li>Hibernate</li>
              <li>DSA</li>
              <li>Godaddy</li>
              <li>Blender</li>
            </ul>
        </div>
        <div className="">
            <ul className='list-disc pl-1'>
              <li>AWS : Elastic BeanStalk</li>
              <li>AWS : EC2, VPC, S3</li>
              <li>AWS : Route53, ACM &#40;SSL&#41;</li>
              <li>SupaBase, Confluent</li>
              <li>Hostinger</li>
              <li>Zod, SASS</li>
              <li>TypeScript</li>
              <li>Docker</li>
              <li>React Native</li>
              <li>GraphQL</li>
              
            </ul>
        </div>

      </div>

    )
  },

  
  {
    title:"Education",
    id: "education",
    content:(
      <ul className='list-disc pl-2'>
        <li>National Institute of Technology, Rourkela &#40; NIT, Rkl &#41;</li>
        <li>MIIT, Bargarh</li>
        <li>Vikash Residential School, Bargarh</li>
        <li>Kendriya Vidyalaya, Bargarh</li>
      </ul>
    )
  },

  
  {
    title:"Certifications",
    id: "certifications",
    content:(
      <ul className='list-disc pl-2'>
        <li>C and C++ Programming , MIIT , Bargarh</li>
        <li>Web Development by Dr. Angela Yu, Udemy</li>
      </ul>
    )
  }
]

function AboutSection() {
  const [tab, setTab]= useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    })
  }

  return (
    <section className='white py-8 sm:py-16 xl:py-16' id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-8 ">
            <Image className=' md:w-[300]'
            src="/images/PC.jpg"
            width={350}
            height={350}
            alt="img"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className='text-4xl font-bold text-white mb-4' >About Me</h2>
              <p className='text-base lg:text-lg text-justify'>
                Hi! I am Ayush Anshuman Supakar, a engineering graduate from NIT Rourkela. I am really passionate about developing websites, building games, competitive coding and 3d designing as it lets me bring my creative imaginations to life. I am also a fast learner and quick adapter. Let&apos;s connect through my socials, provided at the bottom of the page.
              </p>
              <div className="flex flex-row mt-8 gap-4">
                  <TabButton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>

                  <TabButton selectTab={()=>handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>

                  <TabButton selectTab={()=>handleTabChange("certifications")} active={tab==="certifications"}>{" "}Certifications{" "}</TabButton>

                  

              </div>
              <div className="mt-8">
                {TAB_DATA.find((t)=>t.id===tab).content}
              </div>
            </div>

        </div>
      
    </section>
  )
}

export default AboutSection
