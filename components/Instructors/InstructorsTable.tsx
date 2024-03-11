"use client";

import { InstructorsDetail } from "@/app/testdata";
import Instructor from "./instructor";
import { useState } from "react";
import ProfileDetail from "../Profile/ProfileDetail";

const BASE_CLASS = "instructors_table";

export default function InstructorsTable() {
  const [selectedId, setSelectedId] = useState("");
  const [isClick, setClick] = useState(false);

  const toggleSelectedCourse = (courseId: string) => {
    if (selectedId === courseId) {
      setClick(false);
      setSelectedId("");
    } else {
      setClick(true);
      setSelectedId(courseId);
    }
  };
  return (
    <>
      <li className={`${BASE_CLASS}_header`} key="instructor_header">
        <div>Instructor</div>
        <div>Period and Days</div>
        <div>Courses</div>
      </li>
      {InstructorsDetail.map((instructor, index) => (
        <>
          <li
            key={instructor.id}
            className={`${BASE_CLASS}_content`}
            onClick={() => toggleSelectedCourse(instructor.id)}
          >
            <Instructor instructor={instructor} />
          </li>
        </>
      ))}
      <div className="popup">
        <ProfileDetail instructor={InstructorsDetail[0]} />
      </div>
    </>
  );
}
