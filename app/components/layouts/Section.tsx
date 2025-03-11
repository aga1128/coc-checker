import React from 'react'

type Props = {
  title?: string;
  children: Readonly<React.ReactNode>;
}

const Section = ({ title = "", children }: Props) => {
  return (
    <div className="flex flex-col bg-section-color w-full h-full p-6 rounded-md shadow-md">
      {title && (
        <h2 className="mb-6">{title}</h2>
      )}
      {children}
    </div>
  )
}

export default Section