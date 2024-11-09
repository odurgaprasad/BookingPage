import React from "react";
import InitialForm from "./InitialForm";

function BookingPageForm({
  bookingDetails,
  handleChange,
  handleSubmit,
  handlePrevious,
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-[80%] h-[17rem] mx-auto space-y-4 m-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={bookingDetails.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingDetails.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={bookingDetails.phoneNumber}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          name="adults"
          placeholder="Adults"
          value={bookingDetails.adults}
          min="1"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          name="children"
          placeholder="Children"
          value={bookingDetails.children}
          min="0"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded"
          onClick={handlePrevious}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 py-2 px-4 rounded text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BookingPageForm;
