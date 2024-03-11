import { InstructorDetail } from "@/type/course";
import Image from "next/image";

const BASE_CLASS = "instructors_table_content";
type Props = {
  instructor: InstructorDetail;
};

export default function Instructor({ instructor }: Props) {
  const programs = instructor.course
    .filter(
      (course, index, arr) =>
        arr.findLastIndex((course2) => course2.program === course.program) ===
        index
    )
    .map((course) => {
      return {
        program: course.program,
      };
    });

  return (
    <>
      <div className={`${BASE_CLASS}_instructor`}>
        <Image
          src={instructor.avatar_url}
          alt="avatar"
          width={35}
          height={35}
        />
        <div className={`${BASE_CLASS}_instructor_detail`}>
          <div className={`${BASE_CLASS}_instructor_detail_name`}>
            <div>{instructor.firstName}</div>
            <div>{instructor.lastName}</div>
          </div>
          <div className={`${BASE_CLASS}_instructor_detail_status`}>
            {instructor.isActive ? (
              <p className="active">Active</p>
            ) : (
              <p className="inActive">No</p>
            )}
            <p className="hours">{instructor.hours}h</p>
          </div>
        </div>
      </div>
      <div className={`${BASE_CLASS}_PeriodandDays`}>
        <div className={`${BASE_CLASS}_PeriodandDays_period`}>
          {instructor.period.map((period) => (
            <p className={period}>{period}</p>
          ))}
        </div>
        <div className={`${BASE_CLASS}_PeriodandDays_days`}>
          {instructor.Days.map((day) => (
            <>{day} </>
          ))}
        </div>
      </div>
      <div className={`${BASE_CLASS}_course`}>
        {programs.map((obj) => (
          <div className={`${BASE_CLASS}_course_program`}>
            <div className={`${BASE_CLASS}_course_program_title`}>
              {obj.program}
            </div>
            <div className={`${BASE_CLASS}_course_program_course`}>
              {instructor.course.map((course) =>
                course.program === obj.program ? (
                  <p className={course.color}>{course.name}</p>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
