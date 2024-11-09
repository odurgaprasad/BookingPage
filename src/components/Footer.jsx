import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-6 text-center">
      <p>Brisphere</p>
      <p>Spang, Ladakh</p>
      <p>Email: amit.jha0708@gmail.com</p>
      <div className="mt-4">
        <a href="#terms" className="hover:underline mx-2">
          Terms & Conditions
        </a>
        <a href="#privacy" className="hover:underline mx-2">
          Privacy Policy
        </a>
        <a href="#refunds" className="hover:underline mx-2">
          Refunds
        </a>
      </div>
    </footer>
  );
}

export default Footer;
