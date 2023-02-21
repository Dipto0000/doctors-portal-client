import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentHero = ({ date, setDate }) => {
  const activeDateClass = "bg-primary text-white rounded-full";
  
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              date={date}
              onSelect={setDate}
              modifiers={{
                selected: date,
              }}
              className="text-center"
            />
            <style>
              {`.DayPicker-Day--selected { ${activeDateClass} }`}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
