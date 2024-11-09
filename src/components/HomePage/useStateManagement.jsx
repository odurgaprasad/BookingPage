import { useState } from "react";
import axios from "axios";

export default function useStateManagement() {
  const [page, setPage] = useState("initial");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: "",
    rooms: 1,
    price: 0,
  });

  const calculatePrice = () => {
    const days = Math.max(
      1,
      (new Date(bookingDetails.checkOut) - new Date(bookingDetails.checkIn)) /
        (1000 * 60 * 60 * 24)
    );
    const pricePerRoomPerDay = 12000;
    const totalPrice = days * bookingDetails.rooms * pricePerRoomPerDay;
    setBookingDetails({ ...bookingDetails, price: +totalPrice });
  };

  const handleBookClick = () => {
    setPage("form");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        bookingDetails
      );
      console.log(response.data);
      calculatePrice();
      setPage("success");
    } catch (error) {
      console.error("Error submitting booking", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleReset = () => {
    setPage("initial");
    setBookingDetails({
      name: "",
      email: "",
      phoneNumber: "",
      adults: 1,
      children: 0,
      checkIn: "",
      checkOut: "",
      rooms: 1,
      price: 0,
    });
  };

  function handlePrevious() {
    setPage("initial");
    setBookingDetails({
      name: "",
      email: "",
      phoneNumber: "",
      adults: 1,
      children: 0,
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      rooms: bookingDetails.rooms,
      price: 0,
    });
  }
  return {
    page,
    bookingDetails,
    handleBookClick,
    handleChange,
    handleReset,
    handleSubmit,
    setBookingDetails,
    handlePrevious,
  };
}
