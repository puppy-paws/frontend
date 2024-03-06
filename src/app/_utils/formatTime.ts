import dayjs, { Dayjs } from "dayjs";

export function formatTime(createdTime: string): string {
  const createdTimeDayjs: Dayjs = dayjs(createdTime);
  const currentTime: Dayjs = dayjs();
  const diffMinutes: number = currentTime.diff(createdTimeDayjs, "minute");

  if (diffMinutes < 1) {
    return "방금 전";
  } else if (diffMinutes <= 10) {
    return `${diffMinutes}분 전`;
  } else {
    return createdTimeDayjs.format("MM월 DD일 HH:mm");
  }
}
