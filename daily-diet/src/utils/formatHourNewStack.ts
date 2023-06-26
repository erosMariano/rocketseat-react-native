export function formatHourNewStack(data: string) {
  let cleanedHour = data.replace(/\D/g, "");

  // Limitar o valor máximo da hora a 23:59
  let hour = parseInt(cleanedHour.slice(0, 2));
  let minute = parseInt(cleanedHour.slice(2));

  if (hour && minute) {
    if (hour > 23) {
      hour = 23;
    }

    if (minute > 59) {
      minute = 59;
    }

    cleanedHour = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  }
  return cleanedHour;
}
