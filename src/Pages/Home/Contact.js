import React from "react";
import appointMentForm from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{ background: `url(${appointMentForm})` }}
      className="h-screen bg-cover bg-center"
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h3 className="text-primary font-bold">Contact Us</h3>
          <h1 className="text-3xl text-white">Stay connected with us</h1>
        </div>
        <form onSubmit={handleSubmit} className="p-4 rounded-lg">
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="text-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
