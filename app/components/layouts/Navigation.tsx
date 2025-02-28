'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {

  const pathname = usePathname();

  const lists = [
    {
      href: "/",
      pathname: "/",
      title: "ダッシュボード",
    },
    {
      href: "/setting",
      pathname: "/setting",
      title: "設定",
    },
  ]
 
  return (
    <nav>
      <ul className="flex gap-3">
        {lists.map((list) => (
          <li key={list.href}>
            <Link 
              href={list.href}
              className={`${list.pathname === pathname && "bg-red-300 font-semibold"} flex items-center gap-4 rounded-sm px-4 py-2 transition duration-100 ease-in-out cursor-pointer hover:bg-red-400 active:bg-red-300`}
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation