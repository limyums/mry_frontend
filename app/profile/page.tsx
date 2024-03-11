import React from "react";
import { InstructorsDetail } from "../testdata";
import ProfileDetail from "@/components/Profile/ProfileDetail";

export default function Profile() {
  return (
    <>
      <ProfileDetail instructor={InstructorsDetail[0]} />
    </>
  );
}
