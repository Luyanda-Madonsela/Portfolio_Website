'use client'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
    return <div className="flex flex-col items-center content-center justify-center w-full h-32 gap-5 border bg-butt-color">
        <div className="flex gap-5">
            <Link href="https://github.com/Luyanda-Madonsela" target="_blank"><FaGithub size={40} /></Link>
            <Link href="https://www.linkedin.com/in/luyanda-madonsela-b52990120/" target="_blank"><FaLinkedin size={40} /></Link>
            
        </div>
        <div className="text-sm text-gray-800">© 2024 Luyanda Madonsela. All Rights Reserved.</div>
    </div>
}

export default Footer
