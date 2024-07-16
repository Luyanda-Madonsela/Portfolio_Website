import React from 'react';
import Image from 'next/image';


const ExpertisePlaque = ({ imageUrl, headingText, paragraphText }) => {
    return (
        <div>
            <div className='flex flex-col mb-10 text-gray-600 bg-white rounded-b-lg h-96 md:h-112 md:w-48 lg:w-48 xl:w-56 md:mb-28 hover:shadow-xl hover:text-lime-600 '>
                <div className='flex h-3 bg-butt-color'></div>

                <div className='relative flex flex-col items-center content-center justify-center p-2 mt-8 md:m-2 lg:m-2 xl:m-4 h-36 md:h-44 md:w-44 lg:h-40 lg:w-44 xl:h-56 xl:w-48 justify-items-center'>
                    <Image src={imageUrl} alt={headingText} layout="fill" objectFit="contain" />
                </div>

                <div className='flex flex-col items-center content-center justify-center h-16 p-4 font-semibold text-center whitespace-normal justify-items-center text-purple lg:text-md xl:text-lg'>
                    {headingText}
                </div>

                <div className='flex flex-col items-center content-center justify-start p-3 text-sm font-semibold text-center whitespace-normal lg:h-44 xl:h-36'>
                    {paragraphText}
                </div>
            </div>

        </div>
    );
    }

export default ExpertisePlaque;
