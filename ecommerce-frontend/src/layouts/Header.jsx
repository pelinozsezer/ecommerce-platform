import React from "react";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 text-sm">
      <div className="flex items-center gap-6">
        <span className="font-semibold text-black">Bandage</span>
        <nav className="hidden sm:flex gap-6 text-gray-600 font-semibold">
          {["Home", "About", "Blog", "Contact", "Pages"].map((item) => (
            <a key={item} href="#" className="hover:text-black">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-blue-600 font-semibold">
        <a href="#" className="hover:underline">
          Login / Register
        </a>
        <button aria-label="Search" className="hover:text-black">
          <i className="fas fa-search" />
        </button>
        <button aria-label="User" className="hover:text-black">
          <i className="fas fa-user" />
        </button>
        <button aria-label="Cart" className="hover:text-black">
          <i className="fas fa-shopping-cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
