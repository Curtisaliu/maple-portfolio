const BIRTH_YEAR = 1997;
const BIRTH_MONTH = 10; // November (months are 0-based)
const BIRTH_DAY = 2;

// A calendar day in local time, e.g. "2026-10-12" (month is 0-based)
export function getToday(): string {
  const now = new Date();

  return [now.getFullYear(), now.getMonth(), now.getDate()].join("-");
}

// Level is the current age; EXP is progress from the last birthday to the next
export function getCharacterStats(day: string) {
  const [year, month, date] = day.split("-").map(Number);
  const today = new Date(year, month, date);

  let level = year - BIRTH_YEAR;

  if (today < new Date(year, BIRTH_MONTH, BIRTH_DAY)) {
    level -= 1;
  }

  const lastBirthday = new Date(BIRTH_YEAR + level, BIRTH_MONTH, BIRTH_DAY);
  const nextBirthday = new Date(BIRTH_YEAR + level + 1, BIRTH_MONTH, BIRTH_DAY);

  const expProgress =
    (today.getTime() - lastBirthday.getTime()) /
    (nextBirthday.getTime() - lastBirthday.getTime());

  return { level, expProgress };
}
