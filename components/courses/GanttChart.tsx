"use client";

import React, { useState } from "react";
import Grid from "./Grid";
import Cohorts from "./Cohorts";
import TimeTable from "./TimeTable";
import { cohorts } from "../../app/mocks/cohortData";
import { GetCohortsRequest } from "@/models/requests/getCohortsRequest";

const GanttChart = () => {
  const [cohortsData, setCohortsData] = useState<GetCohortsRequest[]>(cohorts);

  return (
    <div id="gantt-container">
      <Grid>
        <Cohorts cohorts={cohortsData} />
        <TimeTable cohorts={cohortsData} />
      </Grid>
    </div>
  );
};

export default GanttChart;
