import React, { ReactNode } from 'react'

const Section = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="flex flex-col bg-section-color">
      {children}
    </div>
  )
}

export default Section