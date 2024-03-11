"use client";

import { Plus } from "lucide-react";
import Course from "./Course";
import { useState } from "react";
import { Todos } from "@/app/testdata";
import Todo from "../Todo";
import AvailableInstructor from "../AvailableInstructor/AvailableInstructor";

const BASE_CLASS = "cohort";

type Props = {
  courses: {
    startDate: string;
    endDate: string;
    name: string;
    Days: string[];
    Instructor: string;
    status: string;
  }[];
  room: string;
  isEdit: boolean;
};

export default function CohortTable({ courses, room, isEdit }: Props) {
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
      <ul className={`${BASE_CLASS}_table`}>
        <li className={`${BASE_CLASS}_table_header`} key="cohort_table_header">
          <div className={`${BASE_CLASS}_table_header_detail`}>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Course</div>
            <div>Room</div>
            <div>Days</div>
            <div>Instructor</div>
          </div>
          <div className={`${BASE_CLASS}_table_header_btn`}></div>
        </li>
        {courses.map((course, index) => (
          <>
            {course.name === "break" ? (
              <>
                {" "}
                <li
                  className={`${BASE_CLASS}_table_content`}
                  key={`${course.name}-${index}`}
                >
                  <Course courses={course} room={room} isEdit={isEdit} />
                </li>
              </>
            ) : (
              <>
                {" "}
                <li
                  className={`${BASE_CLASS}_table_content`}
                  key={`${course.name}-${index}`}
                  onClick={() => toggleSelectedCourse(course.name)}
                >
                  <Course courses={course} room={room} isEdit={isEdit} />
                </li>
              </>
            )}
          </>
        ))}
        {isEdit ? (
          <>
            <li className={`${BASE_CLASS}_table_content`}>
              <div className={`${BASE_CLASS}_table_content_add`}>
                <button>
                  <Plus size={15} />
                </button>
              </div>
              <div className={`${BASE_CLASS}_table_content_btn`}></div>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
      {isClick ? (
        <>
          <div>
            <div className={`${BASE_CLASS}_detailcourse`}>
              <div>
                <AvailableInstructor />
              </div>
              <div className={`${BASE_CLASS}_detailcourse_todo`}>
                <p>
                  {selectedId} Todo{" "}
                  <button>
                    <Plus size={10} />
                  </button>
                </p>
                <div className={`${`${BASE_CLASS}_detailcourse_todo_wrap`}`}>
                  {Todos.map((todo, index) => (
                    <Todo todo={todo} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
}
