import React from 'react';
import Header from "../components/layouts/Header";


export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col w-full px-8 py-6">
        <div className="mb-6">
          <Header />
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}