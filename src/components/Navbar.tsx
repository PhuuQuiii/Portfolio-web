import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let el = e.currentTarget as HTMLAnchorElement;
          let section = el.getAttribute("data-href");
          if (section) {
            document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });

    if (window.innerWidth > 1024) {
      ScrollTrigger.create({
        trigger: ".techstack",
        start: "top 80%",
        end: "bottom top",
        onEnter: () =>
          gsap.to(".character-model", { opacity: 0, duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(".character-model", { opacity: 1, duration: 0.5 }),
      });
    }
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          PhuQui.
        </a>
        <a
          href="mailto:nguyenphuqui170304@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          nguyenphuqui170304@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
