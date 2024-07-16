import Header from '../components/Header'
import ProjectPlaque from '../components/ProjectPlaque';
import Button from '../components/Button'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col w-full min-h-192">

        <div className="flex items-center content-center justify-center w-full h-12 md:h-16 md:p-16 md:pt-24 md:justify-start md:items-center md:content-center "> 
          <div className="-ml-1 md:-ml-0">
             <Header text="my projects" /> 
          </div>   
        </div>

        <div className="flex flex-col w-4/5 gap-16 mt-10 mb-10 ml-10 md:ml-0 min-h-160 md:w-full md:mb-0 md:mt-0 xl:mt-10 md:p-16">
            <ProjectPlaque               
              mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48'><Image src="/images/blog.png" alt="This Website" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='relative lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48'><Image src="/images/portfolio_website_stack.png" alt="This Website" layout='fill' objectFit='cover' /></div>}
              headingText1="This Portfolio" 
              headingText2="Website" 
              button1={<Button text="Demo" href="/" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
              button2={<Button text="Source code" href="https://github.com/Luyanda-Madonsela/porfolio_website" target='_blank'  height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
              mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-40 2xl:w-40'><Image src="/images/tic-tac-toe.png" alt="Tic Tac Toe" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='relative lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48'><Image src="/images/tic_tac_toe_stack.png" alt="Tic Tac Toe Stack" layout='fill' objectFit='cover' /></div>}
              headingText1="Tic Tac Toe" 
              headingText2="Game" 
              button1={<Button text="Demo" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
              button2={<Button text="Source code" href="https://github.com/Luyanda-Madonsela/tic_tac_toe" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
              mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48'><Image src="/images/blog.png" alt="This Website" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='relative lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48'><Image src="/images/portfolio_website_stack.png" alt="Stack Image" layout='fill' objectFit='cover' /></div>}
              headingText1="Programming Jokes" 
              headingText2="REST API" 
              button1={<Button text="Demo" href="/" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
              button2={<Button text="Source code" href="" target='_blank'  height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
              mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='relative lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48'><Image src="/images/portfolio_website_stack.png" alt="Portfolio Website Stack" layout='fill' objectFit='cover' /></div>}
              headingText1="Weather" 
              headingText2="Web App" 
              button1={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
              button2={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
              mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='relative lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48'><Image src="/images/portfolio_website_stack.png" alt="" layout='fill' objectFit='cover' /></div>}
              headingText1="Past Paper" 
              headingText2="Web App" 
              button1={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
              button2={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

          <ProjectPlaque               
            mainImage={<div className='relative h-36 w-36 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48'><Image src="/images/command-line.png" alt="Command Line Interface" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='pl- xl:pl-0'><div className='relative lg:h-14 lg:w-24 xl:h-16 xl:w-28 2xl:h-16 2xl:w-28'><Image src="/images/cli_stack.png" alt="CLI Stack" layout='fill' objectFit='cover' /></div></div>}
            headingText1="Command Line " 
            headingText2="Interface Apps" 
            button1={<Button text="Java" href="https://github.com/Luyanda-Madonsela/SOPR1_Summative_Assessment_1_Practical" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="Javascript" href="https://github.com/Luyanda-Madonsela/WEPR1_Summative-_Assessment_1_Practical" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
          />

        </div>
      </div>
    </main>
  )
}
