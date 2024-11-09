import { IoCheckmarkCircleOutline } from "react-icons/io5";

function SuccessPage({ bookingDetails, handleReset }) {
  return (
    <div className="flex flex-col justify-end">
      <div className="flex flex-col items-center p-8  max-h-screen relative">
        <div className="flex flex-col md:flex-row items-center bg-gray-200 justify-between rounded-lg p-6 w-full min-h-[20rem] max-h-full max-w-4xl mb-6">
          <div className="p-4 text-center md:text-left">
            <p className="text-2xl mb-4 font-semibold">
              Thank you for your booking, {bookingDetails.name}!
            </p>
            <p className="text-gray-700">Name: {bookingDetails.name}</p>
            <p className="text-gray-700">
              Phone Number: {bookingDetails.phoneNumber}
            </p>
            <p className="text-gray-700">Email: {bookingDetails.email}</p>
            <p className="text-gray-700">
              {bookingDetails.adults} Adults | {bookingDetails.children}{" "}
              Children
            </p>
          </div>
          <div className="flex flex-col items-center text-green-500 p-4">
            <IoCheckmarkCircleOutline size={60} />
            <h2 className="text-xl font-bold mt-2">Order Complete</h2>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 w-[80%] max-w-4xl mb-6 absolute top-72">
          <div className="text-center">
            <label className="font-semibold text-gray-700">CHECK-IN</label>
            <p className="text-gray-700">{bookingDetails.checkIn}</p>
          </div>
          <div className="text-center">
            <label className="font-semibold text-gray-700">CHECK-OUT</label>
            <p className="text-gray-700">{bookingDetails.checkOut}</p>
          </div>
          <div className="text-center">
            <label className="font-semibold text-gray-700">ROOMS</label>
            <p className="text-gray-700">{bookingDetails.rooms}</p>
          </div>
          <div className="text-center">
            <label className="font-semibold text-gray-700">TOTAL PRICE</label>
            <p className="bg-blue-900 text-white px-4 py-2 rounded">
              {bookingDetails.price} Rs
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="bg-blue-600 text-white py-2 px-6 rounded"
      >
        Back to Home
      </button>
    </div>
  );
}

export default SuccessPage;
