import { monthly } from "@/app/testdata";
import { getBaseDate, getCoursesByBaseDate } from "@/app/actions/common";
import CourseMonth from "./CourseMonth";

const BASE_CLASS = "program";

export default function ProramMonthTable() {
  /* Necessary Data from API
  program: string;
  name: string;
  room: string;
  period: string;
  course: Course[];
  */
  /* Necessary data from filter
  1. first day of month with year
  2. startday : 1 - monday, 2- tuesday, 3- wed;...
  3. days of month : jan - 31, Feb - 28 or 29 ,,,,
  */
  // cohort list by month
  const month = "2023-11-01";
  const startDay = 3; //wedsday
  const days = 30;
  const baseDate = getBaseDate(month, startDay, days);
  const cnt_week = Math.ceil((days + startDay - 1) / 7);

  const coursesByBaseDate = getCoursesByBaseDate(monthly, baseDate);
  /*  baseDate: string;
  name: string;
  period: string;
  room: string;
  course: Course2[]; */
  const week1 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[0]
  );
  const week2 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[1]
  );
  const week3 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[2]
  );
  const week4 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[3]
  );
  const week5 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[4]
  );
  const week6 = coursesByBaseDate.filter(
    (item) => item.baseDate === baseDate[5]
  );

  console.log(week1);
  return (
    <>
      <div className={`${BASE_CLASS}_table_monthheader`}>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thur</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
      <div className={`${BASE_CLASS}_table_monthcontent`}>
        <div className="monday">
          {week1.map((cohort, index) => (
            <CourseMonth
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
              period={cohort.period}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {week1.map((cohort, index) => (
            <>
              {cohort.period === "weekend" ? (
                <>
                  <div className={`courseWeekend ${cohort.period}`}>
                    {cohort.course.map((obj) => (
                      <>{obj.name}</>
                    ))}
                    {cohort.course[0].name}/ {cohort.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_monthcontent`}>
        <div>
          {week2.map((cohort, index) => (
            <CourseMonth
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
              period={cohort.period}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {week2.map((cohort, index) => (
            <>
              {cohort.period === "weekend" ? (
                <>
                  <div className={`courseWeekend ${cohort.period}`}>
                    {cohort.course.map((obj) => (
                      <>{obj.name}</>
                    ))}
                    {cohort.course[0].name}/ {cohort.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_monthcontent`}>
        <div>
          {week3.map((cohort, index) => (
            <CourseMonth
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
              period={cohort.period}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {week3.map((cohort, index) => (
            <>
              {cohort.period === "weekend" ? (
                <>
                  <div className={`courseWeekend ${cohort.period}`}>
                    {cohort.course.map((obj) => (
                      <>{obj.name}</>
                    ))}
                    {cohort.course[0].name}/ {cohort.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_monthcontent`}>
        <div>
          {week4.map((cohort, index) => (
            <CourseMonth
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
              period={cohort.period}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {week4.map((cohort, index) => (
            <>
              {cohort.period === "weekend" ? (
                <>
                  <div className={`courseWeekend ${cohort.period}`}>
                    {cohort.course.map((obj) => (
                      <>{obj.name}</>
                    ))}
                    {cohort.course[0].name}/ {cohort.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
      <div className={`${BASE_CLASS}_table_monthcontent`}>
        <div>
          {week5.map((cohort, index) => (
            <CourseMonth
              courses={cohort.course}
              name={cohort.name}
              room={cohort.room}
              period={cohort.period}
            />
          ))}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          {week5.map((cohort, index) => (
            <>
              {cohort.period === "weekend" ? (
                <>
                  <div className={`courseWeekend ${cohort.period}`}>
                    {cohort.course.map((obj) => (
                      <>{obj.name}</>
                    ))}
                    {cohort.course[0].name}/ {cohort.name}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
      {cnt_week > 5 ? (
        <>
          <div className={`${BASE_CLASS}_table_monthcontent`}>
            <div>
              {week6.map((cohort, index) => (
                <CourseMonth
                  courses={cohort.course}
                  name={cohort.name}
                  room={cohort.room}
                  period={cohort.period}
                />
              ))}
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              {week6.map((cohort, index) => (
                <>
                  {cohort.period === "weekend" ? (
                    <>
                      <div className={`courseWeekend ${cohort.period}`}>
                        {cohort.course.map((obj) => (
                          <>{obj.name}</>
                        ))}
                        {cohort.course[0].name}/ {cohort.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <div></div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
}
