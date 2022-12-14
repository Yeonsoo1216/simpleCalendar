import React from 'react';

const Calendar = () => {
  const date = new Date();
  
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;
  const currentDate = new Date(date).getDate();

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  return (
    <div>
      <div className="flex aic jcsb">
        <h1 className="current">{currentYear}년 {currentMonth}월</h1>
      </div>

      <div className="Calendar">
        {new Array(firstDay + lastDay).fill(null).map((v, i) => {
          i -= firstDay;
          return (
            <div className={i < 1 ? "hidden-date" : ""}>
              {i}
              <br></br>
              <div className="day">
                {i == currentDate ? "ToDay" : "　"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;