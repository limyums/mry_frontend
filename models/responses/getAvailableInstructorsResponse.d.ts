export interface GetAvailableInstructorsResponse {
  availableInstructors: AvailableInstructor[];
  availableInstructorsOutOfPreference: AvailableInstructor[];
  unavailableInstructorsOverTime: AvailableInstructor[];
  unavailableInstructorsInDayOff: AvailableInstructor[];
  unavailableInstructorsConflicting: AvailableInstructor[];
}

interface AvailableInstructor {
  id: string;
  firstName: string;
  schedule?: Schedule;
}

interface Schedule {
  startDate: string;
  endDate: string;
  course: Course;
  cohort: Cohort;
  time: Time;
}

interface Time {
  name: string;
}

interface Course {
  name: string;
}

interface Cohort {
  name: string;
}