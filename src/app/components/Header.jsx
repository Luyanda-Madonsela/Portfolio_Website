import React from 'react';
import Image from 'next/image'
import header_strip from '/public/images/headerStrip.png'


const TextDisplay= ({ text }) => {
 return <div className='flex flex-col gap-3 text-3xl font-bold text-purple md:font-semibold md:text-3xl lg:text-3xl xl:text-5xl'>
            <div className='relative w-0 h-0 md:h-3 md:w-28 lg:h-2 lg:w-28 xl:h-2 xl:w-40'>
                  <Image
                    src={header_strip}
                    alt="Luyanda Madonsela"
                    objectFit='contain'
                  />
            </div>
            <p>{text}</p>
        </div>;
};

export default TextDisplay;
