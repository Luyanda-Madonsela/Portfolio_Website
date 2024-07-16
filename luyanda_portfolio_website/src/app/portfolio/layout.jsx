import React, { ReactNode } from 'react'

export const metadata = {
  title: 'My Projects',
  description:
    'All my projects with their corresponding demo links and tech stacks',
}


export default function Portfolio({ children }) {
  return <div>{children}</div>
}
