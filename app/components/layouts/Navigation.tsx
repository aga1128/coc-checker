'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  isAdmin: boolean;
  id: string;
}

const Navigation = () => {

  const pathname = usePathname();

  const lists = [
    {
      href: "/",
      pathname: "/",
      title: "ダッシュボード",
      icon: "dashboard",
      showFlag: true,
    },
    {
      href: "/setting",
      pathname: "/setting",
      title: "設定",
      icon: "setting",
      showFlag: true
    },
  ]
 
  return (
    <nav>
      <ul className="flex gap-3">
        {lists.map((list) => (
          list.showFlag && (
            <li key={list.href}>
              <Link 
                href={list.href}
                className={`${list.pathname === pathname && "bg-red-300 font-semibold"} flex items-center gap-4 rounded-sm px-4 py-2 transition duration-100 ease-in-out cursor-pointer hover:bg-red-400 active:bg-red-300`}
              >
                {list.title}
              </Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  )
}

export default Navigation