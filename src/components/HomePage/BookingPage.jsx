import BookingPageForm from "./BookingPageForm";
import SuccessPage from "./SuccessPage";
import useStateManagement from "./useStateManagement";
import InitialForm from "./InitialForm";

function BookingPage() {
  const {
    page,
    bookingDetails,
    handleChange,
    handleReset,
    handleSubmit,
    setBookingDetails,
    handleBookClick,
    handlePrevious,
  } = useStateManagement();

  return (
    <div className="p-4 bg-gray-100 h-[100%] bg-cover">
      {page === "initial" && (
        <div className="pt-5">
          <div className="shadow-xl">
            <div className="text-center p-4">
              <h1 className="text-4xl font-bold">Work from Ladakh</h1>
              <p>India's first true digital tourism ecosystem</p>
            </div>
            <div
              className="relative h-[20rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s4MjUxMjYwMy13aWtpbWVkaWEtaW1hZ2Uta293czkycWkuanBn.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <InitialForm
                bookingDetails={bookingDetails}
                handleChange={handleChange}
                setBookingDetails={setBookingDetails}
                handleBookClick={handleBookClick}
              />
            </div>
          </div>
        </div>
      )}

      {page === "form" && (
        <BookingPageForm
          bookingDetails={bookingDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handlePrevious={handlePrevious}
        />
      )}

      {page === "success" && (
        <SuccessPage
          bookingDetails={bookingDetails}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}

export default BookingPage;
