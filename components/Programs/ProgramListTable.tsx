import { Cohort } from "@/app/testdata";
import CourseWeek from "./CourseWeek";
import { changeDate } from "@/app/actions/common";

const BASE_CLASS = "program";

export default function ProramListTable() {
  /* Necessary Data from API
  program: string;
  name: string;
  room: string;
  period: string;
  course: Course[];
  */
  const Cohorts = Cohort.map((item) => {
    const today = new Date();
    let startDate = new Date(item.course[0].startDate);
    let endDate = new Date(item.course[0].endDate);
    let progress = 0;
    let status = "ongoing";
    item.course.forEach((obj) => {
      let tmpStart = new Date(obj.startDate);
      let tmpEnd = new Date(obj.endDate);
      if (tmpStart < startDate) {
        startDate = tmpStart;
      }
      if (tmpEnd > endDate) {
        endDate = tmpEnd;
      }
      if (tmpEnd < today) {
        progress++;
      }
    });
    if (progress === item.course.length) {
      status = "finished";
    } else if (progress === 0) {
      status = "upcoming";
    }
    return {
      name: item.name,
      program: item.program,
      progress: progress,
      coursecnt: item.course.length,
      period: item.period,
      room: item.room,
      startDate: changeDate(startDate),
      endDate: changeDate(endDate),
      status: status,
    };
  });

  return (
    <>
      <ul className={`${BASE_CLASS}_table`}>
        <li className={`${BASE_CLASS}_table_listheader`}>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Cohort</div>
          <div>Program</div>
          <div>Progress</div>
          <div>Period</div>
          <div>Room</div>
          <div>Days</div>
        </li>
        {Cohorts.map((cohort, index) => (
          <>
            <li
              className={`${BASE_CLASS}_table_listcontent ${cohort.status}`}
              key={index}
            >
              <div>{cohort.startDate}</div>
              <div>{cohort.endDate}</div>
              <div>{cohort.name}</div>
              <div>{cohort.program}</div>
              <div>
                {cohort.progress}/{cohort.coursecnt}
              </div>
              <div className={cohort.period}>{cohort.period}</div>
              <div>{cohort.room}</div>

              {cohort.period === "weekend" ? (
                <div>Sat - Sun</div>
              ) : (
                <div>Mon - Fri</div>
              )}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
