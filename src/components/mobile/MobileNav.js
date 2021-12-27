import { useEffect, useState } from "react";
import menuItems from "components/parts/MenuItems";
import { Menu, CloseMenu } from "assets/static/icon";

export default function MobileNav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // if (typeof window !== "undefined") {
  useEffect(() => {
    document.onreadystatechange = function () {
      let lastScrollPosition = 0;
      const navbar = document.querySelector("#navbar");
      window.addEventListener("scroll", function (e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 10) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
      });
    };
  });

  return (
    <header
      className={
        navbarOpen
          ? " bg-base-dark-7"
          : "container-fluid mobile-nav pt-21 flex items-center justify-between  "
      }
    >
      <nav
        className={
          navbarOpen
            ? "bg-base-dark-7 rounded-1 nav-open nav-scroll-open text-base-light-7"
            : "nav flex"
        }
        id="navbar"
      >
        <ul className="flex items-center gap-8 ">
          <li>
            <a
              href="/"
              clasName={
                navbarOpen
                  ? "nav text-base-light-7"
                  : "nav  text-7 leading-4 text-base-dark-7 flex"
              }
              // className="text-7 leading-4 text-base-dark-7"
              style={{ lineHeight: "150%", fontWeight: 425 }}
            >
              <span
                className={navbarOpen ? "logo-white" : "logo"}
                // style={{
                //   padding: "11px 16px",
                //   backgroundColor: "#0b002f",
                //   height: 38,
                //   width: 38,
                //   borderRadius: 16,
                //   color: "#fff",
                //   lineHeight: 18,
                //   marginRight: 12,
                // }}
              >
                P
              </span>
              PitchBay
            </a>
          </li>
          <li>
            <div className={navbarOpen ? "nav-menu active" : "nav-menu"}>
              <ul
                className={
                  navbarOpen
                    ? "text-base-dark-6"
                    : "flex gap-x-8 text-base-dark-6"
                }
                style={{ width: "100%" }}
                // onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {menuItems.map((item, i) => {
                  return (
                    <li key={i} className="flex">
                      <a
                        href={item.url}
                        className={navbarOpen ? item.cName : ""}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                        {item.title}{" "}
                        <span className="hidden ArrowLink">{item.link}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div
                className={
                  navbarOpen
                    ? "nav-button active"
                    : "nav-button absolute right-8"
                }
              >
                <div className="nav-tittle-button mb-11 hidden">
                  <h1
                    className="mb-3  text-base-light-7"
                    style={{
                      lineHeight: "130%",
                      fontSize: 24,
                    }}
                  >
                    Get Pitchbay now
                  </h1>
                  <p className="text-base-light-6">
                    Get your own PitchBay and get started finish your deck
                    faster
                  </p>
                </div>

                <ul className="flex gap-7 items-center">
                  <li
                    className={
                      navbarOpen ? "nav-button-try" : "text-base-dark-6"
                    }
                  >
                    <a href="/" className="text-7 leading-4 ">
                      Try for free
                    </a>
                  </li>
                  <li
                    className={
                      navbarOpen
                        ? "flex justify-center nav-button-buy"
                        : "flex justify-center button text-6"
                    }
                  >
                    <button>Buy</button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <button
          className={navbarOpen ? "" : "menu-icon absolute right-0 top-4"}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <CloseMenu /> : <Menu />}
          {/* <button type="button" >
          </button> */}
        </button>
      </nav>
    </header>
  );
}
