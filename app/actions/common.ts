import { Course2, monthlyCohort, returnMonthlyCohort } from "@/type/course";

export function changeDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getBaseDate(
  month: string,
  startDay: number,
  days: number
): string[] {
  const tmpDate = new Date(month);
  tmpDate.setDate(tmpDate.getDate() - startDay + 2);

  const cnt_week = Math.ceil((days + startDay - 1) / 7);
  const baseDate = [changeDate(tmpDate)];
  for (let i = 1; i < cnt_week; i++) {
    tmpDate.setDate(tmpDate.getDate() + 7);
    baseDate.push(changeDate(tmpDate));
  }

  return baseDate;
}

export function getCoursesByBaseDate(
  cohorts: monthlyCohort[],
  baseDate: string[]
): returnMonthlyCohort[] {
  const montlyCohorts: returnMonthlyCohort[] = [];
  cohorts.map((item) => {
    baseDate.forEach((date) => {
      const course: Course2[] = [];
      item.course.forEach((obj) => {
        const tmpDate = new Date(date);
        const startDate = new Date(obj.startDate);
        const endDate = new Date(obj.endDate);
        if (tmpDate >= startDate && tmpDate <= endDate) {
          course.push(obj);
        }
      });

      if (course.length != 0) {
        const tmpData: returnMonthlyCohort = {
          baseDate: date,
          name: item.name,
          period: item.period,
          room: item.room,
          course: course,
        };
        montlyCohorts.push(tmpData);
      }
    });
  });
  console.log(montlyCohorts);

  return montlyCohorts;
}
