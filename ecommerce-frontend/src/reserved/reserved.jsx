import React, { useState } from "react";
import { UserRound, Search, ShoppingCart, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pages", href: "/pages" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="w-[414px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="font-montserrat font-bold text-2xl text-[#1F2937]"
        >
          Bandage
        </a>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#23A6F0]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-[414px] mx-auto px-4 py-4 space-y-4 md:hidden">
          <div className="flex justify-around text-[#23A6F0]">
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <UserRound className="w-5 h-5" />
          </div>
          <nav className="flex flex-col items-center gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-700 hover:text-[#23A6F0]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
