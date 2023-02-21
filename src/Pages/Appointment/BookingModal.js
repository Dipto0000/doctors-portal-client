import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="input w-full max-w-xs"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Email"
              className="input w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-secondary input w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
