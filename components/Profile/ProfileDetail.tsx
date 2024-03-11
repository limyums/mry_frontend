import { InstructorDetail } from "@/type/course";
import Image from "next/image";
import "./ProfileDetail.scss";

const BASE_CLASS = "profile_detail";
type Props = {
  instructor: InstructorDetail;
};

export default function ProfileDetail({ instructor }: Props) {
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
  const preferencePrograms = instructor.preference
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
      <ul className={BASE_CLASS}>
        <li className={`${BASE_CLASS}_title`} key={instructor.id + "title"}>
          <Image
            src={instructor.avatar_url}
            alt="avatar"
            width={50}
            height={50}
          />
          <div className={`${BASE_CLASS}_title_name`}>
            <div>
              {instructor.firstName} {instructor.lastName}
            </div>
          </div>
        </li>
        <li className={`${BASE_CLASS}_active`} key={instructor.id + "active"}>
          <div>Active</div>
          <div>
            {instructor.isActive ? (
              <p className="active">Active</p>
            ) : (
              <p className="inActive">No</p>
            )}
          </div>
        </li>
        <li className={`${BASE_CLASS}_hours`} key={instructor.id + "hour"}>
          <div>Hours</div>
          <div>
            <p className="hours">{instructor.hours}h</p>
          </div>
        </li>
        <li className={`${BASE_CLASS}_period`} key={instructor.id + "period"}>
          <div>Period</div>
          <div>
            {instructor.period.map((period) => (
              <p className={period}>{period}</p>
            ))}
          </div>
        </li>
        <li className={`${BASE_CLASS}_days`} key={instructor.id + "days"}>
          <div>Days of the Week</div>
          <div>
            {instructor.Days.map((day) => (
              <>{day} </>
            ))}
          </div>
        </li>
        {programs.map((obj) => (
          <li className={`${BASE_CLASS}_course`} key={instructor.id + "course"}>
            <div className={`${BASE_CLASS}_course_program_title`}>
              {obj.program} Courses
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
          </li>
        ))}
        {preferencePrograms.map((obj) => (
          <li
            className={`${BASE_CLASS}_preference`}
            key={instructor.id + "preference"}
          >
            <div className={`${BASE_CLASS}_course_program_title`}>
              {obj.program} Preferences
            </div>
            <div className={`${BASE_CLASS}_course_program_course`}>
              {instructor.preference.map((course) =>
                course.program === obj.program ? (
                  <p className={course.color}>{course.name}</p>
                ) : (
                  <></>
                )
              )}
            </div>
          </li>
        ))}
        <li key={instructor.id + "vacation"}>
          <div>Vacation</div>
          <div>
            <p className=""></p>
          </div>
        </li>
      </ul>
    </>
  );
}
