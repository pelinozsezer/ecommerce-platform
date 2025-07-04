import React from "react";
import { Link } from "react-router-dom";
import { UserRound, Search, ShoppingCart, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pages", href: "/pages" },
];

const iconButtons = [
  { icon: Search, label: "Search" },
  { icon: ShoppingCart, label: "Cart" },
  { icon: Heart, label: "Wishlist" },
];

export default function NavbarDesktop() {
  return (
    <div className="hidden md:flex w-full h-[58px] bg-white border-b">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#252B42] font-bold text-[24px] font-montserrat"
        >
          Bandage
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="text-[#737373] text-sm font-semibold hover:text-[#23A6F0] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Login & Icons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="flex items-center gap-1 text-[#23A6F0] text-sm font-bold hover:underline"
          >
            <UserRound className="w-[16px] h-[16px]" />
            Login / Register
          </Link>

          {iconButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-[#E6F3FC] transition"
            >
              <Icon className="w-[16px] h-[16px] text-[#23A6F0]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
