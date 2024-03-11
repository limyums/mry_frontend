"use client";
import { useState } from "react";
import { Check, Pencil, Trash2 } from "lucide-react";
type Props = {
  courses: {
    startDate: string;
    endDate: string;
    name: string;
    Days: string[];
    Instructor: string;
    status: string;
  };
  room: string;
  isEdit: boolean;
};

const BASE_CLASS = "cohort_table";
export default function Course({ courses, room, isEdit }: Props) {
  const [edit, setEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [startDate, setStartdate] = useState(courses.startDate || "");
  const [endDate, setEnddate] = useState(courses.endDate || "");

  return (
    <>
      {isEdit ? (
        <>
          {isDeleting ? (
            <>
              <div className={`${BASE_CLASS}_content_delete ${courses.status}`}>
                <div className="">Are you sure you want to delete?</div>
                <button onClick={() => setIsDeleting(false)}>Cancel</button>
                <button onClick={() => setIsDeleting(false)}>Confirm</button>
              </div>
              <div className={`${BASE_CLASS}_content_btn`}></div>
            </>
          ) : edit ? (
            <>
              <div className={`${BASE_CLASS}_content_edit`}>
                <input
                  name="startdate"
                  type="text"
                  placeholder="Enter StartDate"
                  value={courses.startDate}
                  onChange={(event) => setStartdate(event.target.value)}
                  required={true}
                />
                <input
                  name="enddate"
                  type="text"
                  placeholder="Enter EndDate"
                  value={courses.endDate}
                  onChange={(event) => setEnddate(event.target.value)}
                  required={true}
                />
                <div>{courses.name}</div>
                <div>{room}</div>
                <div>
                  {courses.Days[0]} - {courses.Days[courses.Days.length - 1]}
                </div>
                <div>{courses.Instructor}</div>
              </div>
              <div className={`${BASE_CLASS}_content_btn`}>
                <button className="save" onClick={() => setEdit(false)}>
                  <Check size={20} />
                </button>
                <button className="del">
                  <Trash2 size={20} onClick={() => setIsDeleting(true)} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={`${BASE_CLASS}_content_detail ${courses.status}`}>
                <div>{courses.startDate}</div>
                <div>{courses.endDate}</div>
                <div>{courses.name}</div>
                <div>{room}</div>
                <div>
                  {courses.Days[0]} - {courses.Days[courses.Days.length - 1]}
                </div>
                <div>{courses.Instructor}</div>
              </div>
              <div className={`${BASE_CLASS}_content_btn`}>
                <button className="edit" onClick={() => setEdit(true)}>
                  <Pencil size={20} />
                </button>
                <button className="del">
                  <Trash2 size={20} onClick={() => setIsDeleting(true)} />
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <div className={`${BASE_CLASS}_content_detail ${courses.status}`}>
            <div>{courses.startDate}</div>
            <div>{courses.endDate}</div>
            <div>{courses.name}</div>
            <div>{room}</div>
            <div>
              {courses.Days[0]} - {courses.Days[courses.Days.length - 1]}
            </div>
            <div>{courses.Instructor}</div>
          </div>
          <div className={`${BASE_CLASS}_content_btn`}></div>
        </>
      )}
    </>
  );
}
