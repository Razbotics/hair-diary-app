import React, { useEffect, useRef, useState } from "react";
import { useAppDispatcher, useAppState } from "../../context/appContext";
import {
  currMonthName,
  currYear,
  getCalendarDates,
} from "../../libs/dateUtils";
import WeekBar from "./WeekBar";
import "./Calendar.css";
import CalendarElement from "./CalendarElement";
import { actionTypes } from "../../store/reducer";
import { getPosts } from "../../services/postService";
import moment from "moment";

function Calendar() {
  const containerRef = useRef();
  const [moments, setMoments] = useState([]);
  const { date } = useAppState();
  const dispatch = useAppDispatcher();

  const handleOnScroll = (event) => {
    const totalScroll = containerRef.current.scrollHeight;
    const scrollDivs = totalScroll / 3;
    const currentScroll = event.target.scrollTop;
    const padding = 100;

    const prevMonth = date.clone().subtract(1, "month");
    const month = date;
    const nextMonth = date.clone().add(1, "month");

    if (currentScroll < scrollDivs - padding)
      dispatch(actionTypes.editDate(prevMonth));
    else if (
      currentScroll >= scrollDivs &&
      currentScroll < 2 * scrollDivs - padding
    )
      dispatch(actionTypes.editDate(month));
    else if (currentScroll >= 2 * scrollDivs)
      dispatch(actionTypes.editDate(nextMonth));
  };

  useEffect(async () => {
    const resp = await getPosts();
    const { continuationtoken, posts } = resp.responseobjects[0];
    dispatch(actionTypes.setPosts(posts));
    dispatch(actionTypes.setContinuationToken(continuationtoken));
    dispatch(actionTypes.editDate(moment(posts[0].calendardatetime)));
  }, []);

  useEffect(() => {
    const prevMonth = date.clone().subtract(1, "month");
    const month = date;
    const nextMonth = date.clone().add(1, "month");
    const moments = [prevMonth, month, nextMonth].map((val) => ({
      id: `${currMonthName(val)}-${currYear(val)}`,
      dates: getCalendarDates(val),
    }));
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
            days={data.dates.slice(0, 35)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
