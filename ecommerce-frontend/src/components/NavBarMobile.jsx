import React from "react";
import { UserRound, Search, ShoppingCart, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", width: "w-[93px]" },
  { label: "Product", href: "/product", width: "w-[123px]" },
  { label: "Pricing", href: "/pricing", width: "w-[107px]" },
  { label: "Contact", href: "/contact", width: "w-[122px]" },
];

const iconButtons = [
  {
    icon: <UserRound className="w-[16px] h-[16px] text-[#252B42]" />,
    label: "Login",
  },
  {
    icon: <Search className="w-[16px] h-[16px] text-[#252B42]" />,
    label: "Search",
  },
  {
    icon: <ShoppingCart className="w-[16px] h-[16px] text-[#252B42]" />,
    label: "Cart",
  },
  {
    icon: <Heart className="w-[16px] h-[16px] text-[#252B42]" />,
    label: "Wishlist",
  },
];

export default function NavBarMobile() {
  return (
    <header
      id="navbar-style-1 navbar-light"
      className="flex flex-col w-full max-w-[414px] h-[532px] bg-white opacity-100
            md:hidden"
    >
      {/* Mobil Menu */}
      <div className="md:hidden">
        {/* Logo + icons */}
        <div className="flex flex-row items-start justify-between px-[38px] pt-[32px]">
          {/* Bandage logo */}
          <div className="w-[129px] h-[58px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </div>

          {/* Icon buttons */}
          <div className="flex flex-row items-center gap-[25px] w-[168.21px] h-[24px] mt-[6px]">
            {iconButtons.map(({ icon, label }, index) => (
              <button
                key={index}
                aria-label={label}
                className="p-2 rounded-md hover:bg-[#E6F3FC] hover:text-[#23A6F0] transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-[30px] w-[123px] h-[270px] items-center mt-[109px] self-center">
          {navLinks.map(({ label, href, width }) => (
            <a
              key={href}
              href={href}
              className={`
            ${width} h-[45px] opacity-100
            text-center
            font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]
            flex items-center justify-center
            hover:text-[#23A6F0] transition-colors
          `}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
