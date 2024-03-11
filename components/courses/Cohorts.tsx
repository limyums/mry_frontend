import React from "react";
import { GetCohortsRequest } from "../../../shared/models/requests/getCohortsRequest";

interface CohortsProps {
  cohorts: GetCohortsRequest[];
}

const Cohorts = ({ cohorts }: CohortsProps) => {
  return (
    <div id="gantt-grid-container__cohorts">
      <div className="gantt-cohort-row"></div>
      <div className="gantt-cohort-row"></div>
      {cohorts &&
        cohorts.map((cohort: GetCohortsRequest, i: number) => (
          <div
            key={`${i}-${cohort?.id}-${cohort.name}`}
            className="gantt-cohort-row"
          >
            <h4>{cohort.name}</h4>
          </div>
        ))}
    </div>
  );
};

export default Cohorts;
