import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const MakeApppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1">
        <img
          className="mt-[-100px] hidden lg:block"
          src={doctor}
          alt="doctor"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold mb-4">Appointment</h3>
        <h1 className="text-3xl text-white mb-6">Make an appointment today</h1>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, alias
          obcaecati? Repudiandae odio at totam ullam impedit quam pariatur,
          culpa eius eum repellat, sequi inventore laboriosam fugiat? Adipisci
          aperiam minus incidunt.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeApppointment;
