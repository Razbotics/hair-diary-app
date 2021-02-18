import React, { useEffect, useRef } from "react";
import { useAppMoment, useAppSetMoment } from "../../context/appContext";
import {
  currMonthName,
  currYear,
  getCalendarDates,
} from "../../libs/dateUtils";
import WeekBar from "./WeekBar";
import "./Calendar.css";
import CalendarElement from "./CalendarElement";

function Calendar() {
  const containerRef = useRef();
  const date = useAppMoment();
  const setMoment = useAppSetMoment();

  const prevMonth = date.clone().subtract(1, "month");
  const month = date;
  const nextMonth = date.clone().add(1, "month");

  const moments = [
    {
      id: `${currMonthName(prevMonth)}-${currYear(prevMonth)}`,
      dates: getCalendarDates(prevMonth),
    },
    {
      id: `${currMonthName(month)}-${currYear(month)}`,
      dates: getCalendarDates(month),
    },
    {
      id: `${currMonthName(nextMonth)}-${currYear(nextMonth)}`,
      dates: getCalendarDates(nextMonth),
    },
  ];
  console.log(moments);

  return (
    <div className="main-container">
      <div className="week-container">
        <WeekBar />
      </div>
      <div ref={containerRef} className="calendar-container">
        {moments.map((data) => (
          <CalendarElement
            key={data.id}
            id={data.id}
            days={data.dates.slice(0, 35)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
