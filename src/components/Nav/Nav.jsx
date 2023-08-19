import { useState, useEffect } from "react";
import "./Nav.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const navData = [
  { id: "#home", name: "home", label: <AiOutlineHome /> },
  { id: "#about", name: "about", label: <AiOutlineUser /> },
  { id: "#experience", name: "experience", label: <BiBook /> },
  { id: "#services", name: "services", label: <RiServiceLine /> },
  { id: "#contact", name: "contact", label: <BiMessageSquareDetail /> },
];
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navData.forEach((item) => {
        const section = document.querySelector(`${item.id}`);
        if (section) {
          console.log(section);
          const sectionTop = section.offsetTop;
          const sectionHeight = 600;//clientHeight
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveNav(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="left">
      {navData.map((item) => (
        <a
          data-name={item.name}
          key={item.id}
          href={item.id}
          className={activeNav === item.id ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
