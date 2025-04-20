
import Header from '../components/Header'
import Image from 'next/image';
import about_selfie from '/public/images/aboutImage.png'
import certificate1 from '/public/images/completion.jpg'
import certificate2 from '/public/images/letter.jpg'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-row w-full min-h-0 ">
        <div className="flex flex-col pl-10 pr-12 min-h-160 md:w-4/5 md:p-16">
              
                <div className='flex items-center content-center justify-center mb-8 md:mb-0 md:justify-start '>
                    <Header text="about me" />
                </div>
            
            <div className='flex flex-col w-full overflow-auto font-normal text-gray-500 2xl:mt-5 md:min-h-140 lg:min-h-112 xl:min-h-117 2xl:min-h-117 md:pt-5 lg:pt-10 xl:pt-10 2xl:pt-10 lg:text-md xl:text-lg 2xl:text-lg'>
              <p className="whitespace-normal">
                <br></br>
                <p className="flex items-center content-center justify-center mb-2 text-xl font-bold md:justify-start md:mb-0 md:text-2xl text-lime-600">Technical Skills</p>
               

                <br></br>
                <span className="hover:text-lime-600"><span className="font-bold hover:text-lime-600">Full-Stack Development: </span>I handle both Frontend and Backend aspects of application development.</span>
                <br></br><br></br>
                <span className="hover:text-lime-600"><span className="font-bold">UI/UX with Figma: </span>I’m a UI/UX designer in addition to development. From wireframes to high-fidelity mockups, I’ve got it covered.</span>
                 <br></br><br></br>
                <span className="hover:text-lime-600"><span className="font-bold">Database Design and Development: </span>I design relational databases, ensuring data integrity and efficient querying.</span>
                <br></br><br></br>
                <span className="hover:text-lime-600"><span className="font-bold">REST API Development: </span>I build robust APIs that facilitate communication between frontend and backend components.</span>
                <br></br><br></br><br></br>
                <p className="flex items-center content-center justify-center mb-2 text-xl font-bold md:justify-start md:mb-0 md:text-2xl text-lime-600">Soft Skills</p>
                <br></br>
                <span className="hover:text-lime-600"><span className="font-bold">Communication: </span>My experience as a Mathematics tutor for over 5 years has honed my verbal and written communication skills. I have learnt to communicate clearly and effectively.</span>
                <br></br><br></br>
                <span className="hover:text-lime-600"><span className="font-bold">Teamwork and Conflict Management: </span>Throughout my education and employment history, I have had to work in diverse teams, often with varying ages and cultures. I have learnt the art of diversity management as well as conflict prevention and resolution.</span>
                <br></br><br></br>
                <span className="hover:text-lime-600"><span className="font-bold">Speaking and Presentation Skills: </span>My experience as a tutor has made me well adapted to explaining complex concepts and pitching ideas, I can engage an audience effectively.</span>
                <br></br><br></br>
              </p>
                <br></br>
                  <p className="flex items-center content-center justify-center mb-2 text-xl font-bold md:justify-start md:mb-0 md:text-2xl text-lime-600">Employment History</p>
                <br></br>
                <ul>
                  <span className="hover:text-lime-600"><li className='pb-1 overflow-auto whitespace-normal'><span className="font-bold">University of the Witwatersrand (2015): </span>1st Year Engineering Programming Tutor</li></span>      
                </ul>
              </div>
          
              <div className='flex flex-row items-start items-center content-start content-center justify-start justify-center h-20 mt-10 md:justify-start md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-10 '>
                  <Link className='text-2xl text-blue-900 underline hover:text-lime-600' target="_blank" href="/luyanda_madonsela-cv.pdf">Download CV</Link> 
              </div>
        </div>

        <div className="relative flex flex-row items-center content-center justify-center mt-0 md:w-72 md:h-120 lg:w-96 lg:h-160 xl:w-140 xl:h-224">
        <Image
            src={about_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>

      </div>


        <div className="flex flex-col items-center content-center justify-center w-full mt-5 min-h-20 md:justify-start md:items-start md:content-start md:pl-16">
                <Header text="certifications" />    
        </div>
   


      <div className="flex flex-col items-center content-center justify-center w-full mb-20 gap-10 md:gap-20 min-h-288">
      
        <div className='relative flex flex-row items-center content-center justify-center md:mt-5 w-80 h-72 md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
        <Image
            src={certificate1}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
            
        </div>

        <div className='relative flex flex-row items-center content-center justify-center md:mt-1 w-80 h-72 md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
        <Image
            src={certificate2}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
          
        </div>

      </div>


    </main>
  )
}
