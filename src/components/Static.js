// import { Chart, Monitor, Quote, Flow, Dot, Picture } from "assets/static/icon";
import SlickStatic from "./parts/SlickStatic";
import LinkOrange from "assets/static/icon/LinkOrange.png";

// const btntype = [
//   { name: "Chart", icon: <Chart /> },
//   { name: "Graphic", icon: <Picture /> },
//   { name: "Mockup", icon: <Monitor /> },
//   { name: "Flow", icon: <Flow /> },
//   { name: "Testimonial", icon: <Quote /> },
//   { name: "45+ More", icon: <Dot /> },
// ];

export default function Static() {
  return (
    <section>
    <div className="flex lg1:flex-row lg2:flex-row lg3:flex-row lg4:flex-row lg5:flex-row md1:flex-col md2:flex-col md3:flex-col  justify-between lg1:gap-x-4 lg2:gap-x-4 lg3:gap-x-4 lg4:gap-x-4 lg5:gap-x-4  gap-x-20">
        <div className=" flex lg1:flex-col lg2:flex-col lg3:flex-col lg4:flex-col lg5:flex-col md1:flex-col md2:flex-col md3:flex-col ">
          <div className="container-static">
            <div style={{ marginBottom: 20 }}>
              <img
                src={LinkOrange}
                alt=""
                width={37}
                height={28}
                className="ss"
              />
            </div>
            <h2
              className="text-17 lg1:text-17 lg2:text-17 lg3:text-17 lg4:text-17 lg5:text-17 md1:text-13 md2:text-13 md3:text-13 font-medium"
              style={{ lineHeight: "130%", fontWeight: 450 }}
            >
              Various type of section
            </h2>
            <p
              className="text-base-dark-5 text-8 lg1:text-8 lg2:text-8 lg3:text-8 lg4:text-8 lg5:text-8 md1:text-6 md2:text-6 md3:text-6 mt-5 lg1:mb-19 lg2:mb-19 lg3:mb-19 lg4:mb-19 lg5:mb-19 md1:mb-9 md2:mb-9 md3:mb-9"
              style={{ lineHeight: "180%", fontWeight: 375 }}
            >
              Create a non-boring deck with using variations of <br /> each
              slide from PitchBay
            </p>

            <div className="justify-end staticWire">
              <SlickStatic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
