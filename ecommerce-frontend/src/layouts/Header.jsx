import TopBar from "../components/TopBar";
import NavBarMobile from "../components/NavBarMobile";
import TestComponent from "../components/TestComponent";
import NavBarDesktop from "../components/NavBarDesktop.jsx";

export default function Header() {
  return (
    <header id="navbar-style-8" className=" bg-[#FFFFFF]">
      <TopBar />
      <NavBarMobile />
      <NavBarDesktop />
      <TestComponent />
    </header>
  );
}
