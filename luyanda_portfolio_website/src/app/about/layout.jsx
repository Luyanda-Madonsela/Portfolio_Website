import React, { ReactNode } from 'react'

export const metadata = {
  title: 'About Me',
  description:
    'A brief summary of my employment history, skills and certifications',
}

export default function About({ children }) {
  return <div>{children}</div>
}
