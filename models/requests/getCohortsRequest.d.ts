export interface GetCohortsRequest {
  id: string;
  program: string,
  name: string,
  room: string,
  period:string,
  schedules: Schedule[]
}

export interface Schedule {
  id: string;
  startDate: string;
  endDate: string;
  course: Course;
  days: string[];
  instructor: Instructor;
  cohortId: string;
}

export interface Instructor {
  name: string;
  avatarUrl?: string;
}

export interface Course {
  name: string;
  color?: string;
}