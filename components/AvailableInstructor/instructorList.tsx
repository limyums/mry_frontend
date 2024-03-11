import { Instructor } from "@/type/course";
import Image from "next/image";

type Props = {
  instructors: Instructor[];
};
const BASE_CLASS = "instructor_list";
export default function InstructorList({ instructors }: Props) {
  return (
    <>
      <ul className={`${BASE_CLASS}`}>
        {instructors.map((instructor) => (
          <>
            <li className={`${BASE_CLASS}_avatar`} key={instructor.id}>
              <Image
                src={instructor.avatar_url}
                alt="avatar"
                width={35}
                height={35}
              />
              <div>{instructor.firstName}</div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
