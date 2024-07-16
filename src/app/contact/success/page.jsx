
'use client'

import Header from '../../components/Header';
import Image from 'next/image'
import success from '/public/images/sent.png'
import Button from '../../components/Button'

export default function Success() {

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center content-center justify-center w-full min-h-192">

        <div className="flex items-center content-center justify-center w-full h-20 md:justify-start md:p-16 md:pt-24 ">
          <Header text="message sent" />
        </div>
        
        <div className='flex flex-col items-center content-center justify-start pt-10 h-28'>
            <Image
                src={success}
                width={80}
                height={80}
                alt="Success"
              />
        </div>

        <div className='flex flex-col items-center content-center justify-start w-full p-16 text-lg font-semibold text-gray-800'>
              <Button text="Home" href="/" target='' height="h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12" width="w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40"/>
        </div>

      </div>
    </main>
  )
}
