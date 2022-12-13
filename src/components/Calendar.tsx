import React from 'react';

const Calendar = () => {
  const date = new Date();
  
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  

  return (
    <div>
      <div className="Calendar">
        {new Array(firstDay + lastDay).fill(null).map((v, i) => {
          i -= firstDay;
          return (
            <div className={i < 1 ? "hidden-date" : ""}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;