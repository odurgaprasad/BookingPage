import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-4 mx-6 text-stone-900">
      <h1 className="text-xl font-bold">Brisphere</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/discover" className="hover:underline">
          Discover
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
      </nav>
    </header>
  );
}

export default Header;
