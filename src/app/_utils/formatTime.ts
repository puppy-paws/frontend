import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const formatTime = (createdTime: string | Date): string => {
  const createdTimeDayjs: Dayjs = dayjs(createdTime).utc();
  const currentTime: Dayjs = dayjs().utc();
  const diffMinutes: number = currentTime.diff(createdTimeDayjs, "minute");
  const diffHours: number = currentTime.diff(createdTimeDayjs, "hour");
  if (diffMinutes < 1) {
    return "방금 전";
  } else if (diffMinutes <= 10) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return createdTimeDayjs.format("hh:mm A");
  } else {
    return createdTimeDayjs.format("YYYY. MM. DD");
  }
};
