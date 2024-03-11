import { Instructor } from "@/type/course";
import Image from "next/image";
import InstructorList from "./instructorList";
import {
  Todos,
  AvailableInstructors,
  unAvailableInstructors,
} from "@/app/testdata";
import "./AvailableInstructor.scss";

const BASE_CLASS = "instructor";
export default function AvailableInstructor() {
  return (
    <>
      <div className={BASE_CLASS}>
        <div className="available">
          <p>Available Instructor</p>
          <InstructorList instructors={AvailableInstructors} />
        </div>
        <div className="preference">
          <p>Preference</p>
          <InstructorList instructors={AvailableInstructors} />
        </div>
        <div className="unavailable">
          <p>UnAvailable Instructor</p>
          <InstructorList instructors={unAvailableInstructors} />
        </div>
      </div>
    </>
  );
}
