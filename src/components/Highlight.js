import {
  Calendar,
  Support,
  GrayStar,
  Ppt,
  Canva,
  Slide,
  WireFixLeft,
  WireFixRight,
} from "assets/static/icon";

export default function Hightlight() {
  return (
    <section className="">
      <div className="text-center">
        <div style={{ marginBottom: 20 }}>
          <image
            src="assets/static/icon/LinkOrange.png"
            alt=""
            width={37}
            height={28}
            className="ss"
          />
        </div>

        <div className="highlight-gray-1 absolute mt-32 ml-14">
          <GrayStar />
        </div>
        <h2
          className="text-17 md1:text-13 sm1:font-medium sm2:font-medium sm3:font-medium sm4:font-medium sm5:font-medium text-base-dark-7"
          style={{ lineHeight: "130%", fontWeight: 450 }}
        >
          Why PitchBay
        </h2>
        <p
          className="text-base-dark-5 text-8 mt-5 mb-15"
          style={{ lineHeight: "180%", fontWeight: 375 }}
        >
          Prepare your money because for these reasons, <br />
          you might buy PitchBay in the near future
        </p>
        <div className="flex justify-center">
          <button className="button-gray bg-base-dark-1 text-base-dark-7 text-6 mr-7">
            Try for free
          </button>
          <button className="button text-6">Buy</button>
        </div>
      </div>
      {/* SECTION 1 */}
      <div
        // className="row flex flex-wrap justify-around"
        className="highlight-1 flex justify-between  items-center "
        // style={{ margin: "120px 80px 120px 120px" }}
      >
        <div className="highlight-inside" style={{ width: "374px" }}>
          <h3
            className="text-13 md1:text-11 md2:text-11 md3:text-11 text-base-dark-7 font-medium mb-5 sm1:mb-5 sm2:mb-5 sm3:mb-5 sm4:mb-5 sm5:mb-5"
            style={{ lineHeight: "150%", fontWeight: 425 }}
          >
            Pay once lifetime services
          </h3>
          <p
            className="text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-6 md2:text-6 md3:text-6 text-base-dark-5 mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-10 md2:mb-10 md3:mb-10 sm1:mb-11 sm2:mb-11 sm3:mb-11 sm4:mb-11 sm5:mb-11"
            style={{ lineHeight: "150%", fontWeight: 375 }}
          >
            Your journey will not stop when you buy it, but for the rest of your
            life.
          </p>
          <div className="highlight-icon-left flex sm:flex-col md1:flex-row md2:flex-row md3:flex-row gap-x-10 md1:gap-x-8 md2:gap-x-8 md3:gap-x-8">
            <div className="">
              <Calendar />
              <h5
                className="text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-6 md2:text-6 md3:text-6 mt-5 mb-2"
                style={{ lineHeight: "150%", fontWeight: 425 }}
              >
                Monthly update
              </h5>
              <p
                className="text-6 md1:text-6 md2:text-6 md3:text-6 text-base-dark-5"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                Get update every month at 31th.
              </p>
            </div>
            <div>
              <Support />
              <h5
                className="text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-6 md2:text-6 md3:text-6  mt-5 mb-2"
                style={{ lineHeight: "150%", fontWeight: 425 }}
              >
                Lifetime support
              </h5>
              <p
                className="text-6 md1:text-6 md2:text-6 md3:text-6 text-base-dark-5"
                style={{ lineHeight: "150%", fontWeight: 375 }}
              >
                24/7 Product Support for lifetime.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="containerWire"> */}
        <WireFixRight />
        {/* </div> */}
        {/* <WireFixRight /> */}
        <span
          className="highlight-gray-2 absolute ml-14 right-36"
          style={{ marginTop: 500 }}
        >
          <GrayStar />
        </span>
      </div>

      {/* SECTION 2 */}
      <div
        className="highlight-2 row flex  justify-between items-center"
        // className="row flex flex-row-reverse flex-wrap justify-around"
        // className="flex justify-between mx-30 items-center"
        // style={{ margin: "126px 150px 120px 70px" }}
      >
        {/* <div className="containerWire2 "> */}
        <WireFixLeft />
        {/* </div> */}
        <div className="ml-10 highlight-inside-2" style={{ width: "374px" }}>
          <div>
            <h3
              className="text-13 md1:text-11 md2:text-11 md3:text-11 font-medium mb-5"
              style={{ lineHeight: "150%", fontWeight: 425 }}
            >
              File formated in various type
            </h3>
            <p
              className="text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8  md1:text-6 md2:text-6 md3:text-6 text-base-dark-5 mb-13"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Different platforms are not a limitation. Access this kit on the
              platform you are using.
            </p>
            <div className="container-highligh-icon flex gap-x-10 md1:gap-x-8 md2:gap-x-8 md3:gap-x-8">
              <div className="highlight-icon">
                <Ppt />
                {/* <button className="button-grey-static rounded-7 hover:bg-base-dark-2 focus:outline-none focus:bg-base-light-7">
                  <span className="flex items-center ">
                    {btn.icon}
                    <span className="pl-5">{btn.name}</span>
                  </span>
                </button> */}
                <button
                  className="button-icon-soon-on text-6 text-base-dark-6  mt-7 px-3"
                  style={{ lineHeight: "150%", fontWeight: 450 }}
                >
                  .ppt
                </button>
              </div>
              <div className="highlight-icon">
                <Slide />
                <button
                  className="button-icon-soon text-6   mt-7"
                  style={{ lineHeight: "150%", fontWeight: 450 }}
                >
                  soon
                </button>
              </div>
              <div className="highlight-icon">
                <img src="assets/static/icon/lamp.png" alt="" />
                {/* <image src="assets/static/icon/lamp.png" alt="highlight-icon" /> */}
                <button
                  className="button-icon-soon text-6   mt-7"
                  style={{ lineHeight: "150%", fontWeight: 450 }}
                >
                  soon
                </button>
              </div>
              <div className="highlight-icon">
                <Canva />
                <button
                  className="button-icon-soon text-6  mt-7"
                  style={{ lineHeight: "150%", fontWeight: 450 }}
                >
                  soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="containerWire2"
          style={{ boxShadow: -"10px 10px 104px rgba(9, 4, 27, 0.1)" }}
        >
          <WireFixLeft />
        </div> */}
      </div>
    </section>
  );
}
