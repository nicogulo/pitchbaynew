import { ArrowLink } from "assets/static/icon";

const menuItems = [
  // <div className="sm5:flex sm5:justify-between sm5:py-11 sm5:px-13 sm5:text-13 sm5:text-base-light-7 sm5:w-full sm5:text-left">
  // <div className="sm4:flex sm4:justify-between sm4:py-11 sm4:px-13 sm4:text-13 sm4:text-base-light-7 sm4:w-full sm4:text-left">
  // <div className="sm3:flex sm3:justify-between sm3:py-11 sm3:px-13 sm3:text-13 sm3:text-base-light-7 sm3:w-full sm3:text-left">
  // <div className="sm2:flex sm2:justify-between sm2:py-11 sm2:px-13 sm2:text-13 sm2:text-base-light-7 sm2:w-full sm2:text-left">
  // <div className="sm1:flex sm1:justify-between sm1:py-11 sm1:px-13 sm1:text-13 sm1:text-base-light-7 sm1:w-full sm1:text-left">

  // </div>
  {
    title: "Highlights",
    url: "#highlight",
    cName: "nav-links  ",
  },
  {
    title: "Features",
    url: "#features",
    cName: " nav-links  ",
  },
  {
    title: "Roadmap",
    url: "#roadmap",
    cName: " nav-links ",
  },
  {
    title: "About Us",
    url: "#",
    cName: " nav-links ",
    link: <ArrowLink />,
  },
  {
    title: "License",
    url: "#",
    cName: " nav-links",
    link: <ArrowLink />,
  },
];

export default menuItems;
