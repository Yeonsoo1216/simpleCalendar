import React from 'react';

const Calendar = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      { date }
    </div>
  );
};

export default Calendar;