import {
  Phone,
  Mail,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    href: "tel:+6666666666",
    Icon: Phone,
    label: "(666) 666-6666",
  },
  {
    href: "mailto:pelinozsezer@gmail.com",
    Icon: Mail,
    label: "pelinozsezer@gmail.com",
  },
];

const socialLinks = [
  { href: "https://www.instagram.com", Icon: Instagram },
  { href: "https://www.youtube.com", Icon: Youtube },
  { href: "https://www.facebook.com", Icon: Facebook },
  { href: "https://twitter.com", Icon: Twitter },
];

const commonContactClass = "flex items-center gap-[5px] rounded-[5px] p-[10px]";
const commonIconClass = "w-[16px] h-[16px]";
const commonTextClass =
  "font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]";

export default function TopBar() {
  return (
    <div className="hidden md:flex w-full h-[58px] bg-[#252B42] text-white items-center">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-6">
        {/* Left */}
        <div className="flex items-center gap-6">
          {contactInfo.map(({ href, Icon, label }) => (
            <a key={href} href={href} className={commonContactClass}>
              <Icon className={commonIconClass} />
              <span className={commonTextClass}>{label}</span>
            </a>
          ))}
        </div>

        {/* Center */}
        <div className="text-sm px-2">
          Hire{" "}
          <a
            href="https://www.linkedin.com/in/pelinozsezer"
            target="_blank"
            className="font-bold text-yellow-400 hover:underline"
          >
            ⭐️ Pelin Özsezer ⭐️
          </a>{" "}
          for your next project!
        </div>

        {/* Right */}
        <div className="flex items-center w-[120px] h-[26px] gap-[10px] relative">
          {socialLinks.map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[26px] h-[26px] rounded-[6px] transition-all duration-200 hover:bg-yellow-200 hover:bg-opacity-40"
            >
              <Icon className={commonIconClass} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
