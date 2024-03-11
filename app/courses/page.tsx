import React from "react";
import GanttChart from "../../components/courses/GanttChart";
import "./courses.scss";

const BASE_CLASS = "courses";

export default function Courses() {
  return (
    <div>
      <GanttChart />
    </div>
  );
}
