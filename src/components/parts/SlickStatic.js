import React, { Component } from "react";
import Slider from "react-slick";

import {
  Chart,
  Monitor,
  Quote,
  Flow,
  Dot,
  Picture,
  StaticWire,
  StaticWire2,
  StaticWire3,
  StaticWire4,
  StaticWire5,
} from "assets/static/icon";
import One from "assets/static/icon/1.svg";
import Two from "assets/static/icon/2.svg";
import Theree from "assets/static/icon/3.svg";
import Four from "assets/static/icon/4.svg";
import Five from "assets/static/icon/5.svg";
// import SlickStatic from "./parts/SlickStatic";

const btnType = [
  { name: "Chart", icon: <Chart /> },
  { name: "Graphic", icon: <Picture /> },
  { name: "Mockup", icon: <Monitor /> },
  { name: "Flow", icon: <Flow /> },
  { name: "Testimonial", icon: <Quote /> },
  { name: "45+ More", icon: <Dot /> },
];

const baseUrl = "assets/static";

export default class SlickStatic extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a className="" href="/">
            {/* <div className="container-button-static button-static lg:grid lg:grid-cols-2 lg:gap-4  lg:overflow-hidden md:flex md:overflow-x-auto lg:w-full text-base-dark-7"> */}
            <div className="container-button-static button-static lg:overflow-hidden md:flex md:overflow-x-auto lg:w-full text-base-dark-7">
              <button className="md:flex md:items-center py-2  md:px-15 text-7 button-grey-static rounded-7 hover:bg-base-dark-2 focus:outline-none focus:bg-base-light-7">
                {/* {`${i + btntype.map((icon) => icon.icon)}`} */}
                {/* <img
                  alt=""
                  src={`${baseUrl}/Static0${i + 1}.png`}
                 
                  style={{ marginRight: 12 }}
                /> */}

                <span style={{ width: 24, height: 24, marginRight: 12 }}>
                  {btnType[i].icon}
                </span>
                {btnType[i].name}
              </button>
            </div>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-thumb",
      className: "slick-static",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className=" justify-end ">
            <img src={One} alt="One" />
          </div>
          <div className=" justify-end ">
            <img src={Two} alt="Two" />
          </div>
          <div className=" justify-end ">
            <img src={Theree} alt="Theree" />
          </div>
          <div className=" justify-end ">
            <img src={Four} alt="Four" />
          </div>
          <div className=" justify-end ">
            <img src={Five} alt="Five" />
          </div>
          <div className=" justify-end ">
            <img src={One} alt="One" />
          </div>
        </Slider>
      </div>
    );
  }
}
