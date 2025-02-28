import React from 'react';
import Header from "../components/layouts/Header";


export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full p-6 overflow-x-auto max-md:p-4">
        {children}
      </div>
    </>
  );
}