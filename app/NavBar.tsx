"use client";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", url: "/" },
    { label: "Issues", url: "/issues" },
  ];

  const customeClass = (href: string) => {
    if (currentPath === href) return "text-zinc-900";
    else return "text-zinc-500";
  };

  return (
    <div className="flex space-x-6 border-b-2 h-14 items-center px-5 mb-10">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={`${customeClass(link.url)} hover:text-zinc-800 transition-colors`}
            key={link.url}
            href={link.url}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
