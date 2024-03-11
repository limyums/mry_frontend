import { Course } from "@/type/course";

type Props = {
  courses: Course[];
  name: string;
  room: string;
};

export default function CourseWeek({ courses, name, room }: Props) {
  return (
    <>
      {courses.length === 1 ? (
        <>
          {courses[0].Days[0] === "Mon" ? (
            <div className={`courseFull ${courses[0].color}`}>
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
              <div className={`half ${course.color}`}>
                {course.name} - {name} / {room}
              </div>
            ) : (
              <div className={`half ${course.color}`}>
                {course.name} - {name} / {room}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
