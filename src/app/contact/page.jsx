'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const formRef = useRef(null);
  const router = useRouter();

  const validateForm = () => {
  
    const userName = formRef.current?.elements.namedItem('user_name');
    if (!userName || !userName.value.trim()) {
      alert('Name is required.');
      return false;
    }
  
    const userEmail = formRef.current?.elements.namedItem('user_email');
    if (!userEmail || !userEmail.value.trim() || !/\S+@\S+\.\S+/.test(userEmail.value)) {
      alert('Valid email address is required.');
      return false;
    }
  
    const messageElement = formRef.current?.elements.namedItem('message');
  
    if (messageElement && messageElement.value.trim() === '') {
      alert('Message is required.');
      return false; 
    }
  
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form does not exist.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_47bszpg', 'template_pxpizyo', formRef.current, {
      publicKey: 'RLXoqZX5WE0_owUXc',
    })
      .then(() => {
        console.log('SUCCESS!');
        router.push('/contact/success');
      })
      .catch((error) => {
        console.log('FAILED...', error.message);
        router.push('/contact/unsuccessful');
      });
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center w-full min-h-192">
        <div className="flex items-center content-center justify-center w-full h-12 md:h-16 md:p-16 md:pt-24 md:justify-start md:items-center md:content-center ">
          <div className="-ml-3 md:-ml-0"></div>
          <Header text="get in touch" />
        </div>
        <div className="flex w-2/3 mt-10 mb-0 h-160 md:mt-20">
          <form className="w-full max-w-sm mx-auto" ref={formRef} onSubmit={sendEmail}>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple" name="user_name">name<span className='text-red-500 text-m'>*</span></label>
            <input className="bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" type="text" name="user_name" />
            <br></br>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple" name="user_email">email<span className='text-red-500 text-m'>*</span></label>
            <input className="bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" type="email" name="user_email" />
            <br></br>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-purple">message<span className='text-red-500 text-m'>*</span></label>
            <textarea rows={6} 
              className="text-gray-900 bg-gray-50 border-2 border-butt-color text-sm rounded-sm focus:ring-butt-color focus:border-butt-color block w-full p-2.5 dark:bg-white dark:border-butt-color dark:placeholder-gray-400 dark:text-black dark:focus:ring-butt-color dark:focus:border-butt-color" 
              placeholder="Type your message here..." 
              name="message" 
              />
            <br></br>
            <br></br>
            <div className='flex flex-row items-center content-center justify-center'>
              <input type="submit" value="Send" className="flex items-center content-center justify-center h-10 text-blue-900 rounded-md bg-butt-color font-poppins w-28" />
            </div>
          </form>
        </div>  
      </div>
    </main>
  );
}
