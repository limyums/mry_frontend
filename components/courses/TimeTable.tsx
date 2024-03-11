"use client";

import { useEffect, useState } from "react";
import {
  months,
  monthDiff,
  getWeeksInMonth,
  createFormattedWeekFromStr,
  currentStatusColor,
  weekDiff,
} from "../../lib/timeTableHelper";
import InstructorAvatar from "./InstructorAvatar";
import InstructorInfoModal from "./InstructorInfoModal";
import CourseInfoModal from "./CourseInfoModal";
import { GetCohortsRequest, Schedule } from "../../../shared/models/requests/getCohortsRequest";

interface CohortsProps {
  cohorts: GetCohortsRequest[];
}
interface Open {
  [key: string]: boolean;
}

interface TimeRange {
  fromSelectMonth: number;
  fromSelectYear: string;
  toSelectMonth: number;
  toSelectYear: string;
}

const TimeTable = ({ cohorts }: CohortsProps) => {
  const [instructorAvatarModalOpen, setInstructorAvatarModalOpen] =
    useState<Open>({});
  const [courseInfoModalOpen, setCourseInfoModalOpen] = useState<Open>({});
  const [timeRange, setTimeRange] = useState<TimeRange>({
    fromSelectMonth: 0,
    fromSelectYear: "",
    toSelectMonth: 11,
    toSelectYear: "",
  });

  useEffect(() => {
    let oldestStartDate = "";
    let latestEndDate = "";

    cohorts.map((cohort: GetCohortsRequest) => {
      cohort.schedules.map((schedule: Schedule) => {
        setInstructorAvatarModalOpen({
          [schedule.id]: false,
        });
        setCourseInfoModalOpen({
          [schedule.id]: false,
        });
        if (oldestStartDate === "") {
          oldestStartDate = schedule.startDate;
        } else if (schedule.startDate < oldestStartDate) {
          oldestStartDate = schedule.startDate;
        }
        if (latestEndDate === "") {
          latestEndDate = schedule.endDate;
        } else if (schedule.endDate > latestEndDate) {
          latestEndDate = schedule.endDate;
        }
      });
    });

    setTimeRange({
      fromSelectMonth: new Date(oldestStartDate).getMonth(),
      fromSelectYear: new Date(oldestStartDate).getFullYear().toString(),
      toSelectMonth: new Date(latestEndDate).getMonth(),
      toSelectYear: new Date(latestEndDate).getFullYear().toString(),
    });
  }, [cohorts]);

  // creating rows
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );
  const numMonths = monthDiff(startMonth, endMonth) + 1;
  let month = new Date(startMonth);

  let monthRows = [];
  let dayRows = [];
  let dayRow = [];
  let cohortRows: Array<JSX.Element> = [];
  let cohortRow: Array<JSX.Element> = [];

  for (let i = 0; i < numMonths; i++) {
    // create month rows
    monthRows.push(
      <div
        key={i}
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(90px, 1fr)",
          outline: "0.5px solid var(--color-outline)",
          textAlign: "center",
          height: "var(--cell-height)",
        }}
      >
        <span style={{ margin: "auto" }}>
          {months[month.getMonth()] + " " + month.getFullYear()}
        </span>
      </div>
    );

    // create day and week rows
    const numWeeks = getWeeksInMonth(month.getFullYear(), month.getMonth() + 1);

    for (let j = 1; j <= numWeeks; j++) {
      dayRow.push(
        <div
          key={j}
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "minmax(90px, 1fr)",
            outline: "0.5px solid var(--color-outline)",
            textAlign: "center",
            height: "var(--cell-height)",
          }}
        >
          <span style={{ margin: "auto" }}>Week{j}</span>
        </div>
      );
    }

    dayRows.push(
      <div
        key={i}
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(90px, 1fr)",
          outline: "0.5px solid var(--color-outline)",
          textAlign: "center",
          height: "var(--cell-height)",
        }}
      >
        {dayRow}
      </div>
    );

    dayRow = [];
    month.setMonth(month.getMonth() + 1);
  }

  // create cohort rows
  if (cohorts) {
    cohorts.forEach((cohort: GetCohortsRequest) => {
      let month = new Date(startMonth);
      for (let i = 0; i < numMonths; i++) {
        const curYear = month.getFullYear();
        const curMonth = month.getMonth() + 1;

        const numWeeks = getWeeksInMonth(curYear, curMonth);

        for (let j = 1; j <= numWeeks; j++) {
          cohortRow.push(
            <div
              key={`${cohort.id}-${j}`}
              style={{
                position: "relative",
                outline: "0.5px solid var(--color-outline)",
                marginTop: "0.5px",
              }}
              data-cohort={cohort.id}
              data-date={`${curYear}-${curMonth}-Week${j}`}
            >
              {cohort.schedules.map((schedule: Schedule, i: number) => {
                if (
                  schedule.cohortId === cohort.id &&
                  createFormattedWeekFromStr(schedule.startDate) ===
                    `${curYear}-${curMonth}-Week${j}`
                ) {
                  return (
                    <div
                      className="cohortDuration"
                      key={`${i}-${schedule.id}`}
                      tabIndex={0}
                      onClick={() => {
                        setCourseInfoModalOpen({
                          [schedule.id]: !courseInfoModalOpen[schedule.id],
                        });
                      }}
                      style={{
                        height:
                          schedule.days?.length === 0 ||
                          schedule.days?.length >= 5
                            ? "calc(var(--cell-height) - 1px)"
                            : "50%",
                        top: `${
                          schedule.days?.length === 0 ||
                          (schedule.days && schedule.days[0] === "Mon")
                            ? 0
                            : "50%"
                        }`,
                        width: `calc(${weekDiff(
                          schedule.startDate,
                          schedule.endDate
                        )} * 100% - 1px)`,
                        background: currentStatusColor(schedule),
                      }}
                    >
                      {schedule.course.name !== "break" ? (
                        <InstructorAvatar
                          schedule={schedule}
                          open={instructorAvatarModalOpen}
                          setOpen={setInstructorAvatarModalOpen}
                        />
                      ) : (
                        <div></div>
                      )}
                      <p className="gantt-course_name">
                        {schedule.course.name}
                      </p>
                      <div></div>
                      {instructorAvatarModalOpen[schedule.id] && (
                        <InstructorInfoModal schedule={schedule} />
                      )}
                      {courseInfoModalOpen[schedule.id] && (
                        <CourseInfoModal cohort={cohort} schedule={schedule} />
                      )}
                    </div>
                  );
                }
              })}
            </div>
          );
        }

        cohortRows.push(
          <div
            key={`${i}-${cohort.id}`}
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "minmax(90px, 1fr)",
              outline: "0.5px solid var(--color-outline)",
              textAlign: "center",
              height: "var(--cell-height)",
            }}
          >
            {cohortRow}
          </div>
        );

        cohortRow = [];
        month.setMonth(month.getMonth() + 1);
      }
    });
  }

  return (
    <div
      id="gantt-grid-container__time"
      style={{ gridTemplateColumns: `repeat(${numMonths}, 1fr)` }}
    >
      {monthRows}
      {dayRows}
      <div
        id="gantt-time-period-cell-container"
        style={{
          gridColumn: "1/-1",
          display: "grid",
          gridTemplateColumns: `repeat(${numMonths}, 1fr)`,
          paddingLeft: "0.5px",
        }}
      >
        {cohortRows}
      </div>
    </div>
  );
};

export default TimeTable;
