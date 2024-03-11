import React from "react";
import Image from "next/image";
import { Schedule } from "@/models/requests/getCohortsRequest";

interface InstructorAvatarProps {
  schedule: Schedule;
  open: { [key: string]: boolean };
  setOpen: (open: { [key: string]: boolean }) => void;
}

const InstructorAvatar = ({
  schedule,
  open,
  setOpen,
}: InstructorAvatarProps) => {
  const avatarSize =
    schedule.days?.length === 0 || schedule.days?.length >= 5 ? 40 : 20;
  return (
    <button
      style={{
        borderRadius: "50%",
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "none",
        backgroundColor: "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setOpen({
          [schedule?.id]: !open[schedule?.id],
        });
      }}
    >
      <Image
        src={
          schedule?.instructor?.avatarUrl
            ? schedule?.instructor?.avatarUrl
            : "/imgs/no-image-user.png"
        }
        alt={`${schedule?.instructor?.name} Image`}
        width={avatarSize}
        height={avatarSize}
        style={{
          borderRadius: "50%",
        }}
      />
    </button>
  );
};

export default InstructorAvatar;
