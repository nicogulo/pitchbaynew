import React, { Component } from "react";
import Slider from "react-slick";
import { Check, Prev, Next } from "assets/static/icon";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      // dots: true,
      // infinite: false,
      className: "slick-package",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      dots: true,
      infinite: false,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div
            className="btn-price-sq  bg-base-light-7 rounded-7 z-20  "
            key={1}
          >
            {/* <Dolar /> */}
            <span
              className="mb-3 mt-19 text-green text-7"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Early Price
            </span>
            <h1
              className="text-27 mb-3 text-base-dark-7 "
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              $5
            </h1>
            <span
              className="mb-15 text-base-dark-5 text-6"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Ends at 31 Dec 2021
            </span>
            <ul
              className="text-base-dark-6 text-6 mb-26"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">400+ Unique </span> Slide
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">3D Model Asset</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">16:9 Aspect Ratio</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
            </ul>
          </div>
          <div
            className="btn-price-sq  bg-base-light-7 rounded-7 z-20  "
            key={2}
          >
            {/* <Dolar /> */}
            <span
              className="mb-3 mt-19 text-green text-7"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Starting Price
            </span>
            <h1
              className="text-27 mb-3 text-base-dark-7 "
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              $15
            </h1>
            <span
              className="mb-15 text-base-dark-5 text-6"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Ends at 31 Dec 2021
            </span>
            <ul
              className="text-base-dark-6 text-6 mb-26"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">400+ Unique </span> Slide
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">3D Model Asset</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">16:9 Aspect Ratio</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
            </ul>
          </div>
          <div
            className="btn-price-sq  bg-base-light-7 rounded-7 z-20  "
            key={2}
          >
            {/* <Dolar /> */}
            <span
              className="mb-3 mt-19 text-green text-7"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Regular Price
            </span>
            <h1
              className="text-27 mb-3 text-base-dark-7 "
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              $20
            </h1>
            <span
              className="mb-15 text-base-dark-5 text-6"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              Ends at 31 Dec 2021
            </span>
            <ul
              className="text-base-dark-6 text-6 mb-26"
              style={{ lineHeight: "150%", fontWeight: 375 }}
            >
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">400+ Unique </span> Slide
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">3D Model Asset</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">16:9 Aspect Ratio</span>
              </li>
              <li className="flex mb-7 ">
                <Check /> <span className="ml-3">Light Version</span>
              </li>
            </ul>
          </div>
        </Slider>
        {/* <div className=" mt-15" style={{ textAlign: "center" }}>
          <button className=" slick-arrow mr-9" onClick={this.previous}>
           
            <Prev />
          </button>
          <button
            className="slick-arrow"
            //   className="btn-next bg-base-dark-7"
            onClick={this.next}
          >
            <Next />
          </button>
        </div> */}
      </div>
    );
  }
}
