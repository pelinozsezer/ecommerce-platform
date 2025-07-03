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
  {
    icon: <Search className="w-[16px] h-[16px] text-[#23A6F0]" />,
    label: "Search",
  },
  {
    icon: <ShoppingCart className="w-[16px] h-[16px] text-[#23A6F0]" />,
    label: "Cart",
  },
  {
    icon: <Heart className="w-[16px] h-[16px] text-[#23A6F0]" />,
    label: "Wishlist",
  },
];

export default function NavBar() {
  return (
    <header className="w-full bg-white h-[70px]">
      <div className="max-w-[1437px] h-[58px] mx-auto flex items-center justify-between px-[38px] mt-[12px]">
        {/* Logo */}
        <div className="w-[187px] flex items-center">
          <a
            href="/"
            className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#1F2937]"
          >
            Bandage
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex items-center gap-[15px] text-sm text-[#737373] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#23A6F0]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-[10px]">
          {/* Login/Register */}
          <button className="flex items-center gap-[5px] p-[10px] rounded-[37px] hover:bg-blue-50">
            <UserRound className="w-[12px] h-[12px] text-[#23A6F0]" />
            <span className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">
              Login / Register
            </span>
          </button>

          {/* Icon buttons */}
          {iconButtons.map((btn, index) => (
            <button
              key={index}
              className="p-[10px] rounded-[37px] hover:bg-blue-50"
              aria-label={btn.label}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
