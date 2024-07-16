import React from 'react';

const ProjectPlaque = ({ mainImage, stackImage, headingText1, headingText2, button1, button2 }) => {
 return (
    <div>
        <div className='flex flex-row w-full bg-white rounded-lg h-80 md:h-40 lg:h-40 xl:h-48 lg:bg-gray-50 md:rounded-r-sm hover:shadow-xl'>

                <div className='flex md:w-3 bg-butt-color'></div>

                <div className='flex flex-col items-center content-center justify-center w-full gap-2 mr-1 md:w-auto md:flex-row md:ml-5 md:gap-5'>
                    <div className='flex items-center content-center justify-center lg:h-32 lg:w-32 xl:h-40 xl:w-48 xl:p-6'>
                        {mainImage}
                    </div>

                    <div className='flex flex-col items-start content-center justify-center w-full md:w-40 md:h-32 lg:w-40 lg:h-32 xl:w-64 xl:h-40'>
                        <div className='flex items-start content-center justify-center w-full text-xl font-semibold md:justify-start text-lime-600 xl:text-2xl md:pl-0'>{headingText1}</div>
                        <div className='flex items-start content-center justify-center w-full text-xl font-semibold md:justify-start text-lime-600 xl:text-2xl'>{headingText2}</div>
                    </div>

                    <div className='flex flex-row items-center content-center justify-center xl:ml-10 2xl:ml-2 custom:-ml-0 custom:h-40 custom:w-96 lg:h-40 lg:w-48 xl:h-40 xl:w-112 2xl:h-40 2xl:w-140 xl:justify-start xl:items-center xl:content-start 2xl:justify-center 2xl:items-center 2xl:content-center'>
                        {stackImage}
                    </div>

                    <div className='flex items-center content-center justify-center gap-4 xl:h-40 custom:w-64 custom:h-40 xl:w-72 2xl:h-40 2xl:w-96 md:gap-5 lg:gap-10 custom:gap-5'>
                        {button1}
                        {button2}
                    </div>

                </div>
        </div>
    </div>
 );
}

export default ProjectPlaque;
