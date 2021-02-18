export function getCalendarDates(date) {
  const a = [];
  const startDay = date.clone().startOf("month").startOf("week");
  const endDay = date.clone().endOf("month").endOf("week");

  const _date = startDay.clone().subtract(1, "day");
  while (_date.isBefore(endDay, "day")) {
    const currentMoment = _date.add(1, "day").clone();
    const currentDate = parseInt(currentMoment.format("D"));
    const data = {
      date: currentDate,
      thisMonth: true,
      raw: currentMoment.format("YYYY-MM-DD"),
    };
    a.push(data);
  }

  let thisMonth = false;
  a.forEach((day) => {
    if (day.date === 1) thisMonth = !thisMonth;
    day.thisMonth = thisMonth;
  });
  return a;
}

export function currMonthName(date) {
  return date.format("MMMM");
}

export function currYear(date) {
  return date.format("YYYY");
}
