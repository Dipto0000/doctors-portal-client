import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentHero from "./AppointmentHero";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentHero date={date} setDate={setDate}></AppointmentHero>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
