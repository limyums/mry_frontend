import React from "react";
import { Schedule } from "@/models/requests/getCohortsRequest";

interface InstructorInfoModalProps {
  schedule: Schedule;
}

const InstructorInfoModal = ({ schedule }: InstructorInfoModalProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: -50,
        left: 60,
        backgroundColor: "#FFF",
        zIndex: 2,
        padding: 10,
        borderRadius: 5,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p
        style={{
          paddingBottom: 5,
        }}
      >
        {schedule?.instructor?.name}
      </p>
      <p
        style={{
          background: `var(--${schedule?.course.color})`,
          padding: 8,
          borderRadius: 5,
        }}
      >
        {schedule?.course.name}
      </p>
    </div>
  );
};

export default InstructorInfoModal;
