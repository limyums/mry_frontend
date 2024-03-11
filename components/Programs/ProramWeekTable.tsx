import { weekly } from "@/app/testdata";
import CourseWeek from "./CourseWeek";

const BASE_CLASS = "program";

export default function ProramWeekTable() {
  /* Necessary Data from API
  name: string;
  room: string;
  period: string;
  course: Course[];
  */
  //filtering : cohorts
  const morningCohort = weekly
    .filter((item) => item.period === "morning")
    .map(({ name, room, course }) => ({ name, room, course }));
  const afternoonCohort = weekly
    .filter((item) => item.period === "afternoon")
    .map(({ name, room, course }) => ({ name, room, course }));
  const eveningCohort = weekly
    .filter((item) => item.period === "evening")
    .map(({ name, room, course }) => ({ name, room, course }));
  const weekendCohort = weekly
    .filter((item) => item.period === "weekend")
    .map(({ name, room, course }) => ({ name, room, course }));

  return (
    <>
      <div className={`${BASE_CLASS}_table_weekheader`}>
        <div></div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thur</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
      <div className={`${BASE_CLASS}_table_weekcontent`}>
        <div>Morning</div>
        <div className="monday">
          {morningCohort.map((cohort, index) => (
            <CourseWeek
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_weekcontent`}>
        <div>Afternoon</div>
        <div>
          {afternoonCohort.map((cohort, index) => (
            <CourseWeek
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_weekcontent`}>
        <div>Evening</div>
        <div>
          {eveningCohort.map((cohort, index) => (
            <CourseWeek
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_weekcontent`}>
        <div>Weekend</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {weekendCohort.map((cohort, index) => (
            <div className={`courseWeekend ${cohort.course[0].color}`}>
              {cohort.course[0].name} / {cohort.name} / {cohort.room}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
