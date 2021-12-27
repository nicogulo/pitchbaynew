import React from "react";
import { Dolar, AquaStar, RainbowStar, Check } from "assets/static/icon";
import Package from "./Package";

const pack = [
  {
    name: "Early Price",
    price: "$5",
    date: "Dec 2021",
    desc: [
      "400+ Unique Slide",
      "Light Version",
      "3D Model Asset",
      "16:9 Aspect Ratio",
      "Light Version",
    ],
  },
  {
    name: "Starting Price",
    price: "$15",
    date: "Jan 2022",
    desc: [
      "400+ Unique Slide",
      "Light Version",
      "3D Model Asset",
      "16:9 Aspect Ratio",
      "Light Version",
    ],
  },
  {
    name: "Regular Price",
    price: "$20",
    date: "Feb 2022",
    desc: [
      "400+ Unique Slide",
      "Light Version",
      "3D Model Asset",
      "16:9 Aspect Ratio",
      "Light Version",
    ],
  },
];

const RoadMap = () => {
  return (
    <div className="container-fluid mb-33">
      {/* // <div className="mb-33"> */}
      <section className="flex justify-center ">
        <div className="roadmap-title flex flex-col items-center text-center">
          <div
            className="text-17  text-center text-pink bg-base-light-7  rounded-5 mb-13 sm1:mb-6 sm2:mb-6 sm3:mb-6 sm4:mb-6 sm5:mb-6"
            style={{
              width: 80,
              height: 40,
              boxShadow: `0px 10px 100px rgba(9, 4, 27, 0.1)`,
            }}
          >
            “
          </div>
          <AquaStar />
          {/* <span className=" aquastar">
          </span>
          <span className=" rainbowstar">
        </span> */}
          <RainbowStar />
          <h2
            className="text-17 lg1:text-17 lg2:text-17 lg3:text-17 lg4:text-17 lg5:text-17 md1:text-13 md2:text-13 md3:text-13 font-medium text-base-dark-7 mb-13 sm1:mb-6 sm2:mb-6 sm3:mb-6 sm4:mb-6 sm5:mb-6"
            style={{ lineHeight: "130%", fontWeight: 450 }}
          >
            Save your time on designing a deck and focus on the information that
            you want to deliver
          </h2>
          <p
            className="text-base-dark-7 text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-7 md2:text-7 md3:text-7  mb-2 font-medium"
            style={{ lineHeight: "150%", fontWeight: 450 }}
          >
            Dani Irawan
          </p>
          <p
            id="roadmap"
            className="text-base-dark-6 text-7 lg1:text-7 lg2:text-7 lg3:text-7 lg4:text-7 lg5:text-7 md1:text-6 md2:text-6 md3:text-6 "
            style={{ lineHeight: "150%", fontWeight: 375 }}
          >
            Creator of PitchBay
          </p>
        </div>

        {/* SECTION 1 */}
      </section>
      <div className="">
        <div style={{ marginBottom: 20 }}>
          <image
            src="/static/icon/LinkGreen.png"
            alt=""
            width={37}
            height={28}
            className="ss"
          />
        </div>
        <h2
          className="text-17 lg1:text-17 lg2:text-17 lg3:text-17 lg4:text-17 lg5:text-17 md1:text-13 md2:text-13 md3:text-13 "
          style={{ lineHeight: "130%", fontWeight: 450 }}
        >
          Product roadmap
        </h2>
        <p
          className="text-base-dark-5 text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-6 md2:text-6 md3:text-6 mt-5 mb-30 lg1:mb-30 lg2:mb-30 lg3:mb-30 lg4:mb-30 lg5:mb-30"
          style={{ lineHeight: "180%", fontWeight: 375 }}
        >
          We will not stop innovating. In a period of long,
          <br />
          keep an eye on the progress of PitchBay
        </p>

        <div className="flex pack xl1:hidden xl2:hidden 2xl:hidden lg1:hidden lg2:hidden lg3:hidden lg4:hidden lg5:hidden mb-31 ">
          {pack.map((item, i) => {
            return (
              <div
                className="btn-price-sq mr-9 bg-base-light-7 rounded-7 z-20  "
                key={i}
              >
                {/* <Dolar /> */}
                <span className="mb-3 mt-19 text-green text-7">
                  {item.name}
                </span>
                <h1 className="text-27 mb-3 text-base-dark-7 font-medium">
                  {item.price}
                </h1>
                <span className="mb-15 text-base-dark-5 text-6">
                  Ends at {item.date}
                </span>
                <ul className="text-base-dark-6 text-6 mb-26">
                  {item.desc.map((item, i) => {
                    return (
                      <li key={i} className="flex mb-7 ">
                        <Check /> <span className="ml-3">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <section className="body-card flex justify-center md1:hidden md2:hidden md3:hidden lg1:block lg2:block lg3:block lg4:block lg5:block">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex">
              <div
                className="date  border-base-dark-2"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                <h1
                  className="uppercase text-center text-green relative -top-9"
                  style={{ lineHeight: "150%", fontWeight: 375 }}
                >
                  dec 2021
                </h1>
                <div className="btn-price flex items-center pl-16 bg-base-light-7 rounded-7 absolute mt-16">
                  <Dolar /> <span className="pl-8">Early Price</span>
                </div>
              </div>

              <div
                className="date  border-base-dark-2"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                <h1 className="uppercase text-center text-base-dark-3  relative -top-9">
                  Jan 2022
                </h1>
                <div className="btn-price flex items-center pl-16 bg-base-light-7 rounded-7 absolute mt-33">
                  <Dolar /> <span className="pl-8">Starting Price</span>
                </div>
              </div>
              <div
                className="date  border-base-dark-2"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                <h1 className="uppercase text-center text-base-dark-3  relative -top-9">
                  Feb 2022
                </h1>
                <div className="btn-price-long flex items-center pl-16 bg-base-light-7 rounded-7 absolute mt-34">
                  <Dolar /> <span className="pl-8">Regular Price</span>
                </div>
              </div>

              <div
                className="date  border-base-dark-2"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                <h1 className="uppercase text-center text-base-dark-3  relative -top-9">
                  Mar 2022
                </h1>
              </div>
              <Package />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
