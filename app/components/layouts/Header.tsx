import React from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from 'next/image';
import Navigation from '../../components/layouts/Navigation';

const Header = async() => {

  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  return (
    <header>
      <div className="flex items-center gap-8">
        <h1>CoC進捗管理アプリ</h1>
        <Navigation />
        <div className="flex items-center gap-2 ml-auto">
          {session.user.image && (
            <Image
              src={session.user.image}
              width={30}
              height={30}
              alt="サムネイル"
              className="rounded-full"
            />
          )}
          {session.user.name}
        </div>
      </div>
    </header>
  )
}

export default Header