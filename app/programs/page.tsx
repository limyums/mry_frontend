"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Department, Program } from "../testdata";
import ProgramWeekTable from "@/components/Programs/ProramWeekTable";
import ProramMonthTable from "@/components/Programs/ProgramMonthTable";
import "./program.scss";
import ProramListTable from "@/components/Programs/ProgramListTable";

const BASE_CLASS = "program";

export default function Programs() {
  const [isList, setList] = useState(true);
  const [isMonth, setMonth] = useState(false);
  const [isWeek, setWeek] = useState(false);

  const toggleList = () => {
    setList(true);
    setMonth(false);
    setWeek(false);
  };
  const toggleMonth = () => {
    setList(false);
    setMonth(true);
    setWeek(false);
  };
  const toggleWeek = () => {
    setList(false);
    setMonth(false);
    setWeek(true);
  };
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

              <ChevronDown size={25} />
            </div>
            <div className={`${BASE_CLASS}_header_filter_status`}>
              <input type="checkbox" id="finished" name="checkbox" />
              <div>Morning</div>
              <input type="checkbox" id="ongoing" name="checkbox" />
              <div>Afternoon</div>
              <input type="checkbox" id="upcoming" name="checkbox" />
              <div>Evening</div>
              <input type="checkbox" id="upcoming" name="checkbox" />
              <div>Weekend</div>
              <button>
                <Search size={20} />
              </button>
            </div>
            <div className={`${BASE_CLASS}_header_filter_status`}>
              <button onClick={toggleList}>List</button>
              <button onClick={toggleMonth}>Month</button>
              <button onClick={toggleWeek}>Week</button>
            </div>
          </div>
        </div>
        <div className={`${BASE_CLASS}_title`}>
          <div> Nov </div>
        </div>
        <div className={`${BASE_CLASS}_table`}>
          {isList ? (
            <ProramListTable />
          ) : isMonth ? (
            <ProramMonthTable />
          ) : (
            <ProgramWeekTable />
          )}
        </div>
      </div>
    </>
  );
}
