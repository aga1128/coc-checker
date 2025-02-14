import React from 'react';


export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col min-h-dvh w-full p-6 bg-yellow-100 overflow-x-auto max-md:p-4">
        {children}
      </div>
    </>
  );
}