"use client";
import {
  BetweenVerticalStart,
  Check,
  ChevronDown,
  NotebookText,
  Pencil,
  Search,
  Trash2,
} from "lucide-react";
import "./cohorts.scss";
import { Cohort, Department, Program } from "../testdata";
import CohortTable from "@/components/Cohort/CohortTable";
import { useState } from "react";
const BASE_CLASS = "cohort";

export default function Cohorts() {
  /* Necessary Data from APIs
  program: string;
  name: string;
  room: string;
  period: string;
  course: Course[];
  status : (upcoming, ongoing, finished based on today )
  */
  /*
 when click the course (available Instructor)
 Instructor 
 */
  const [isEdit, setIsEdit] = useState(false);
  const currentCohort = Cohort[3];
  const today = new Date();

  const currentCourse = currentCohort.course.map((item) => {
    const endDate = new Date(item.endDate);
    const startDate = new Date(item.startDate);
    let status = "upcoming";
    if (endDate >= today && startDate <= today) {
      status = "ongoing";
    } else if (endDate < today) {
      status = "finished";
    }

    if (item.name === "break") {
      status = "break";
    }
    return {
      ...item,
      status: status,
    };
  });

  return (
    <>
      <div className={BASE_CLASS}>
        <div className={`${BASE_CLASS}_header`}>
          <div className={`${BASE_CLASS}_header_filter`}>
            <div className={`${BASE_CLASS}_header_filter_selector`}>
              <select
                className={`${BASE_CLASS}_header_filter_selector_department`}
              >
                <option value="0" key="department">
                  All Department
                </option>
                {Department.map((item, index) => (
                  <option value={index + 1} key={index + "department"}>
                    {" "}
                    {item}
                  </option>
                ))}
              </select>

              <select
                className={`${BASE_CLASS}_header_filter_selector_program`}
              >
                <option value="0" key="program">
                  All Program
                </option>
                {Program.map((item, index) => (
                  <option value={index + 1} key={index + "program"}>
                    {item}
                  </option>
                ))}
              </select>

              <select className={`${BASE_CLASS}_header_filter_selector_cohort`}>
                <option value="0" key="cohort">
                  All cohort
                </option>
                {Cohort.map((item, index) => (
                  <option value={index + 1} key={index + "cohort"}>
                    {item.name}
                  </option>
                ))}
              </select>

              <ChevronDown size={25} />
            </div>
            <div className={`${BASE_CLASS}_header_filter_status`}>
              <input type="checkbox" id="finished" name="checkbox" />
              <div>Finished</div>
              <input type="checkbox" id="ongoing" name="checkbox" />
              <div>Ongoing</div>
              <input type="checkbox" id="upcoming" name="checkbox" />
              <div>Upcoming</div>
              <button>
                <Search size={20} />
              </button>
            </div>
          </div>
          <div className={`${BASE_CLASS}_header_button`}>
            <button> Create Class </button>
            <button>
              <BetweenVerticalStart size={25} />
            </button>
          </div>
        </div>
        <div className={`${BASE_CLASS}_title`}>
          <div className={`${BASE_CLASS}_title_program`}>
            {currentCohort.program}
          </div>
          <div className={`${BASE_CLASS}_title_cohort`}>
            {currentCohort.name}
          </div>
          <div className={`${BASE_CLASS}_title_period`}>
            <div className={currentCohort.period}> {currentCohort.period}</div>
          </div>
          <div className={`${BASE_CLASS}_title_del`}>
            <button>
              <Trash2 size={20} />
            </button>
          </div>
          {isEdit ? (
            <>
              <div className={`${BASE_CLASS}_title_edit`}>
                <button>
                  <NotebookText size={20} onClick={() => setIsEdit(false)} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={`${BASE_CLASS}_title_edit`}>
                <button>
                  <Pencil size={20} onClick={() => setIsEdit(true)} />
                </button>
              </div>
            </>
          )}
        </div>
        <CohortTable
          courses={currentCourse}
          room={currentCohort.room}
          isEdit={isEdit}
        />
      </div>
    </>
  );
}
