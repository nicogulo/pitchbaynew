import { PurpleStar, YellowStar } from "assets/static/icon";
import Countdown from "./Countdown";

import highlight from "assets/static/highlight.png";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col items-center">
        <Countdown />

        <div className="flex flex-1 relative">
          <PurpleStar />
          <h1
            className="sm5:text-17 text-27 mb-7 text-center font-medium text-base-dark-7"
            style={{ lineHeight: "120%" }}
          >
            Deck template for <br />
            your next pitch
          </h1>

          <YellowStar />
          {/* <span className="absolute yellowstar -right-full ">
          </span> */}
        </div>

        <p
          className="sm5:text-6 sm5:mb-8 text-center text-9 mb-17 text-base-dark-6"
          style={{ lineHeight: "180%", fontWeight: 375 }}
        >
          Focus on what you want to deliver, let PitchBay <br /> handle the deck
          want want want
        </p>

        <button
          className="button text-7 text-base-light-7 flex items-center"
          style={{
            width: 222,
            height: 56,
            padding: "20px 56px",
            marginBottom: 64,
            borderRadius: 28,
          }}
        >
          Buy only for $5
        </button>
        <img src={highlight} alt="Hero" className="object-cover" />
      </div>
    </section>
  );
}
