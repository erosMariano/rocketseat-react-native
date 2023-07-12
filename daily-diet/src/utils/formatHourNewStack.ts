export function formatHourNewStack(data: string) {
  const digitsOnly = data.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (digitsOnly.length === 0) {
    return "";
  }

  let formattedTime = "";
  const hourDigits = digitsOnly.slice(0, 2);
  const minuteDigits = digitsOnly.slice(2, 4);

  if (hourDigits.length > 0) {
    const hours = parseInt(hourDigits, 10);
    if (hours > 23) {
      return "";
    }
    formattedTime += hourDigits;
  }

  if (minuteDigits.length > 0) {
    const minutes = parseInt(minuteDigits, 10);
    if (minutes > 59) {
      return "";
    }
    if (formattedTime.length > 0) {
      formattedTime += ":";
    }
    formattedTime += minuteDigits;
  }

  return formattedTime;
}
