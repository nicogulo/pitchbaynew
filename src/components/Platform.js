import { WhiteStar, Section, Section2 } from "assets/static/icon";
import LinkPurple from "assets/static/icon/LinkPurple.png";

export default function Platform() {
  return (
    <section>
      <div className="flex items-center flex-col text-center mb-27 lg1:mb-27 lg2:mb-27 lg3:mb-27 lg4:mb-27 lg5:mb-27 md1:mb-23 md2:mb-23 md3:mb-23">
        <div style={{ marginBottom: 20 }}>
          <img src={LinkPurple} alt="" width={37} height={28} className="ss" />
        </div>

        <h2
          className="text-17 md1:text-13 md2:text-13 md3:text-13 sm1:text-11 sm2:text-11 sm3:text-11 sm4:text-11 sm5:text-11 font-medium"
          style={{ lineHeight: "130%", fontWeight: 450 }}
        >
          Whats inside
        </h2>
        <p
          className="text-base-dark-5 text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8  md1:text-6 md2:text-6 md3:text-6  sm1:text-6 sm2:text-6 sm3:text-6 sm4:text-6 sm5:text-6  mt-5"
          style={{ lineHeight: "180%", fontWeight: 375 }}
        >
          Make sure your money is not wasted in <br />
          every PitchBay features
        </p>
      </div>
      <div className="container-platform flex flex-row gap-x-10 xl1:gap-x-10 xl2:gap-x-10 md1:gap-x-4 md2:gap-x-4 md3:gap-x-4 justify-between ">
        <div className="flex flex-col">
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7 flex flex-col justify-center text-center bg-green text-base-light-7 square-1">
            <span className="absolute whiteStar-1">
              <WhiteStar />
            </span>
            <h1
              className="text-27 text-base-1"
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              16:9
            </h1>
            <p
              className="text-8 text-base-1"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Orientation
            </p>
          </div>
          <div className=" flex items-center justify-center bg-base-light-6 square-2">
            <Section2 />
            {/* <div className="flex flex-col  items-center justify-center square-2-sub">
              <div className="mb-7 square-2-sub-1"></div>
              <div className=" square-2-sub-2"></div>
              <div className="square-2-sub-3 absolute text-base-light-7 text-7">
                H: 9
              </div>
              <div className="square-2-sub-4 absolute text-base-light-7 text-7">
                W: 16
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7 flex flex-col justify-center text-center square-3">
            <h1
              className="text-27 text-base-dark-7"
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              400
            </h1>
            <p
              className="text-8 text-base-dark-5"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Slides
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7 flex items-center justify-center square-4 z-50">
            <Section />
            {/* <div className="flex flex-col  items-center justify-center square-4-sub">
              <div className="mb-7 square-2-sub-1"></div>
              <div className=" square-2-sub-2"></div>
              <div className="square-4-sub-3 absolute text-base-light-7 text-7">
                For Y
              </div>
              <div className="square-4-sub-4 absolute text-base-light-7 text-7">
                For W
              </div>
            </div> */}
          </div>
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7 flex flex-col justify-center text-center text-base-light-7 square-5">
            <span className="absolute  whiteStar-2">
              <WhiteStar />
            </span>
            <h1
              className="text-27  text-base-1"
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              10
            </h1>
            <p
              className="text-8 text-base-1"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Purpose
            </p>
          </div>
        </div>
        <div className="flex flex-col sm1:flex-col-reverse sm2:flex-col-reverse sm3:flex-col-reverse sm4:flex-col-reverse sm5:flex-col-reverse">
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7 flex flex-col justify-center text-center text-base-light-7 square-6">
            <span className="absolute whiteStar-3">
              <WhiteStar />
            </span>
            <h1
              className="text-27  text-base-1"
              style={{ lineHeight: "150%", fontWeight: 450 }}
            >
              20
            </h1>
            <p
              className="text-8 text-base-1"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              3D Assets
            </p>
          </div>
          <div className="mb-19 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-7 md2:mb-7 md3:mb-7  flex flex-col justify-center text-center square-7">
            <h1
              className="text-27 text-base-dark-7"
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              50
            </h1>
            <p
              className="text-8 font text-base-dark-5"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Sections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
