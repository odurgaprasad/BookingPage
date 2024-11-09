import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BookingPage from "./components/HomePage/BookingPage";
import Footer from "./components/Footer";
import DiscoverSection from "./components/DiscoverSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BookingPage />} />
          <Route path="/discover" element={<DiscoverSection />} />
          <Route path="/services" element={<ServicesSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
