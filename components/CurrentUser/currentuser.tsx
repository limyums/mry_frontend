"use client";
import Image from "next/image";
import "./currentuser.scss";
import { ChevronDown, LogOut, Shuffle, UserRound } from "lucide-react";
import { useState } from "react";

const BASE_CLASS = "currentuser";
export default function CurrentUser() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${BASE_CLASS} ${isOpen ? "open" : ""}`}>
      <button onClick={toggleDropdown}>
        <Image src="/imgs/sample.jpeg" alt="avatar" width={35} height={35} />
        Yumi Lim
        <ChevronDown size={25} />
      </button>
      {isOpen && (
        <ul className={`${BASE_CLASS}_content`}>
          <a href="/profile">
            <li onClick={toggleDropdown}>
              <UserRound size={20} />
              Profile Setting
            </li>
          </a>
          <a href="#">
            <li onClick={toggleDropdown}>
              {" "}
              <Shuffle size={20} />
              Instructor Board
            </li>
          </a>
          <a href="#">
            <li onClick={toggleDropdown}>
              <LogOut size={20} />
              Logout
            </li>
          </a>
        </ul>
      )}
    </div>
  );
}
