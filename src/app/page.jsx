import React from "react";
import Image from 'next/image'
import Button from './components/Button'
import Header from './components/Header'
import welcome_selfie from '/public/images/welcome-selfie.png'
import ExpertisePlaque from './components/ExpertisePlaque';
import tech_stack from '/public/images/tech_stack_badges.png'


export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen whitespace-nowrap scrollbar-hide">

{/* ------------------------------------------------Hero Section--------------------------------------------------- */}
      <div className="flex flex-col items-center content-center justify-center w-full min-h-0 mb-16 md:flex-row md:mb-0 lg:ml-1 " >

        <div className="relative flex items-center content-center justify-start h-64 md:mb-28 lg:mb-28 xl:mb-10 2xl:mb-10 xl:mr-2 2xl:mr-2 w-72 md:w-0 md:h-0 ">
            <Image
              src={welcome_selfie}
              layout="fill" 
              objectFit="contain"
              alt="Luyanda Madonsela's Photo"
            />
        </div>

        <div className="flex flex-col w-full 2xl:-ml-12 min-h-96 md:w-1/2 md:pt-2 lg:pt-10 md:ml-14 lg:ml-0 lg:mr-24 xl:-ml-2 xl:mr-16 custom:-mr-0 2xl:-mr-10">
          <div className="2xl:-ml-5">
           <div className="flex items-center content-center justify-center mt-5 md:justify-start md:-ml-0">
             <Header text="I'm Luyanda Madonsela," />
           </div>
            
            <div className='flex items-center content-center justify-center pt-2 text-2xl font-semibold text-butt-color lg:text-3xl xl:text-5xl md:justify-start md:pl-0'>Full Stack Web &</div>
            <div className='flex items-center content-center justify-center pt-1 text-2xl font-semibold text-butt-color lg:text-3xl xl:text-5xl md:justify-start md:pl-0'>Software Developer</div>

            {/* -----------------Short Intro------------- */}

            <div className='flex flex-col w-full pt-3 pb-5 overflow-auto font-normal text-gray-500 md:pl-0 min-h-24 lg:text-lg xl:text-xl 2xl:text-xl'> 
              
                <p className="flex items-center content-center justify-center mt-2 mb-10 -ml-2 text-xl whitespace-normal md:justify-start md:-ml-1 md:text-2xl ">
                  📍 Johannesburg, South Africa          
                </p>
              
            </div>

            {/* -----------------Browse Projects Button------------- */}
            <div className='flex items-center content-center justify-center text-lg font-semibold text-gray-800 md:justify-start'>
            <Button text="View projects" href="/portfolio" target='' height="h-12 md:h-12 lg:h-12 xl:h-16 2xl:h-16" width="w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44"/>
            </div>
        </div>
        </div>
        {/* -----------------Hero Image------------- */}
        <div className="relative flex items-center content-center justify-start min-h-160 md:mb-28 lg:mb-28 xl:mb-10 2xl:mb-10 xl:mr-16 custom:mr-10 2xl:mr-28 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-128 xl:h-128 2xl:w-160 2xl:h-160">
          <Image
            src={welcome_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>
      </div>

{/* ------------------------------------------------Expertise Section--------------------------------------------------- */}
      <div className="flex flex-col items-center content-center justify-center w-full md:h-24 md:justify-start md:items-start md:content-start md:pl-16 md:pt-10">
          <Header text="my expertise" />
      </div>

      <div className="flex items-center content-center justify-center w-4/5 pt-10 ml-10 md:ml-0 md:w-full md:pt-16 2xl:pt-16">
          
          <div className='grid items-center content-center justify-center grid-flow-row md:grid-cols-2 md:gap-x-20 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-20'>
      
            <ExpertisePlaque 
              imageUrl="/images/web-design.png" 
              headingText="UI/UX Design" 
              paragraphText="I have experience creating wireframes and can bring ideas to life using Figma by designing high-fidelity mockups."
            />

            <ExpertisePlaque 
              imageUrl="/images/responsive-design.png" 
              headingText="Web App Development" 
              paragraphText="I do both frontend and backend development, creating seamless and responsive user interfaces. I also handle server-side programming."
            />

            <ExpertisePlaque 
              imageUrl="/images/app_development.png" 
              headingText="Software Development" 
              paragraphText="I create software applications for various platforms using Java and C# programming."
            />

            <ExpertisePlaque 
              imageUrl="/images/storage.png" 
              headingText="Database Development" 
              paragraphText="I am proficient in SQL database development and management systems, including database normalization techniques."
            />
          </div>
      </div> 

{/* ------------------------------------------------Tech Stack Section--------------------------------------------------- */}

      <div className="flex flex-col w-full md:h-128 lg:h-192">

        <div className='flex flex-col w-full h-20 pl-24 md:pl-16'>
          <Header text="my tech stack" />
        </div>

        {/* -----------------Tech Stack Badges------------- */}
        <div className='flex items-center content-center justify-center w-4/5 ml-8 md:flex-col md:h-128 md:w-full'>
            <Image src={tech_stack} width={1300} height={1400} alt="Personal Logo" />
        </div>

        {/* -----------------Browse Projects Button------------- */}
        <div className='flex flex-col items-center content-center justify-center w-full h-24 p-16 text-lg font-semibold text-gray-800'>
              <Button text="view projects" href="/portfolio" target='' height="h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12" width="w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40"/>
        </div>

      </div>
    </main>
  )
}
