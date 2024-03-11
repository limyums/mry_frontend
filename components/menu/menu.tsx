"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./menu.scss";
import {
  Home,
  GraduationCap,
  LibraryBig,
  NotebookText,
  UsersRound,
  Bell,
} from "lucide-react";

const BASE_CLASS = "menu";

export default function Menu() {
  const currentRouter = usePathname();
  const NAV_ITEMS = [
    { name: "Home", path: "/", icon: <Home size={25} /> },
    { name: "Program", path: "/programs", icon: <GraduationCap size={25} /> },
    { name: "Cohorts", path: "/cohorts", icon: <NotebookText size={25} /> },
    { name: "Courses", path: "/courses", icon: <LibraryBig size={25} /> },
    {
      name: "Instructors",
      path: "/instructors",
      icon: <UsersRound size={25} />,
    },
  ];

  return (
    <>
      <div className={BASE_CLASS}>
        <a href="/">
          <Image
            className="logo"
            src="/imgs/logo_png.png"
            alt="logo"
            width={180}
            height={100}
          />
        </a>
        <ul className={`${BASE_CLASS}_links`}>
          {NAV_ITEMS.map(({ name, path, icon }, index) => (
            <li
              key={`${name}-${index}`}
              className={`${currentRouter === path ? "current" : ""}`}
            >
              <Link href={path}>
                {icon}
                <div className="title">{name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
