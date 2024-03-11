export type Course = {
  startDate: string;
  endDate: string;
  name: string;
  Days: string[];
  Instructor: string;
  color: string;
};

export type Course2 = {
  startDate: string;
  endDate: string;
  name: string;
  Days: string[];
  Instructor: string;
};

export type monthlyCohort = {
  program: string;
  name: string;
  room: string;
  period: string;
  course: Course2[];
};
export type returnMonthlyCohort = {
  baseDate: string;
  name: string;
  period: string;
  room: string;
  course: Course2[];
};

export type ProgramList = {
  name: string;
  program: string;
  progress: number;
  coursecnt: number;
  period: string;
  room: string;
  startDate: string;
  endDate: string;
  status: string;
};

export type Todo = {
  id: string;
  title: string;
  dueDate: string;
  isCompleted: boolean;
};

export type Instructor = {
  id: string;
  firstName: string;
  lastName: string;
  avatar_url: string;
};

export type InstructorDetail = {
  id: string;
  firstName: string;
  lastName: string;
  avatar_url: string;
  isActive: boolean;
  hours: number;
  Days: string[];
  period: string[];
  course: InstructorCourse[];
  preference: InstructorCourse[];
};

export type InstructorCourse = {
  program: string;
  name: string;
  color: string;
};
