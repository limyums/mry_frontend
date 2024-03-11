import { Course2 } from "@/type/course";

type Props = {
  courses: Course2[];
  name: string;
  room: string;
  period: string;
};

export default function CourseMonth({ courses, name, room, period }: Props) {
  return (
    <>
      {courses.length === 1 ? (
        <>
          {courses[0].Days[0] === "Mon" ? (
            <div className={`courseFull ${period}`}>
              {courses[0].name} - {name} / {room}
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className="courseHalf">
          {courses.map((course, index) =>
            course.Days[0] === "Mon" ? (
              <div className={`half ${period}`}>
                {course.name} - {name} / {room}
              </div>
            ) : (
              <div className={`half ${period}`}>
                {course.name} - {name} / {room}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
