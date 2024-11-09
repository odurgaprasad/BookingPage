import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

function InitialForm({
  bookingDetails,
  handleChange,
  setBookingDetails,
  handleBookClick,
}) {
  return (
    <div className="absolute inset-x-0 bottom-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex justify-around space-x-4 lg:w-[50%]">
        <div className="text-center">
          <label className="font-semibold">CHECK-IN</label>
          <input
            type="date"
            name="checkIn"
            value={bookingDetails.checkIn}
            onChange={handleChange}
            className="block border mt-1"
          />
        </div>
        <div className="text-center">
          <label className="font-semibold">CHECK-OUT</label>
          <input
            type="date"
            name="checkOut"
            value={bookingDetails.checkOut}
            onChange={handleChange}
            className="block border mt-1"
          />
        </div>
        <div className="text-center">
          <label className="font-semibold">ROOMS</label>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() =>
                setBookingDetails({
                  ...bookingDetails,
                  rooms: Math.max(1, bookingDetails.rooms - 1),
                })
              }
              disabled={bookingDetails.rooms <= 1}
            >
              <FaMinusCircle className="h-5 w-5" />
            </button>
            <p className="text-xl">{bookingDetails.rooms}</p>
            <button
              onClick={() =>
                setBookingDetails({
                  ...bookingDetails,
                  rooms: bookingDetails.rooms + 1,
                })
              }
            >
              <FaPlusCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button
          className="bg-blue-900 px-6 py-2 rounded-lg text-white"
          onClick={handleBookClick}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default InitialForm;
