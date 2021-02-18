import React, { useEffect, useRef, useState } from "react";
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
  const [moments, setMoments] = useState([]);
  const date = useAppMoment();
  const setMoment = useAppSetMoment();

  const handleOnScroll = (event) => {
    const totalScroll = containerRef.current.scrollHeight;
    const scrollDivs = totalScroll / 3;
    const currentScroll = event.target.scrollTop;
    const padding = 100;

    const prevMonth = date.clone().subtract(1, "month");
    const month = date;
    const nextMonth = date.clone().add(1, "month");

    if (currentScroll < scrollDivs - padding) setMoment(prevMonth);
    else if (
      currentScroll >= scrollDivs &&
      currentScroll < 2 * scrollDivs - padding
    )
      setMoment(month);
    else if (currentScroll >= 2 * scrollDivs) setMoment(nextMonth);
  };

  useEffect(() => {
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
    setMoments(moments);
  }, [date]);

  return (
    <div className="main-container">
      <div className="week-container">
        <WeekBar />
      </div>
      <div
        ref={containerRef}
        className="calendar-container"
        onScroll={handleOnScroll}
      >
        {moments?.map((data) => (
          <CalendarElement
            key={data.id}
            id={data.id}
            current={data.id === `${currMonthName(date)}-${currYear(date)}`}
            days={data.dates}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
