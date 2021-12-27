import {
  Twitter,
  Instagram,
  GreenStar,
  PurpleStar2,
  StaticWireFooter,
} from "assets/static/icon";
import LinkColor from "assets/static/icon/LinkColor.png";

export default function Footer() {
  return (
    <footer>
      <div className="text-center">
        <div className="flex items-center flex-col">
          <GreenStar />
          {/* <span className=" greenstar">
          </span>
          <span className=" purplestar2">
        </span> */}
          <PurpleStar2 />

          <div style={{ marginBottom: 20 }}>
            <img src={LinkColor} alt="" width={37} height={28} className="ss" />
          </div>

          <h2
            className="text-17 font-medium text-base-light-7"
            style={{ lineHeight: "130%", fontWeight: 450 }}
          >
            Get Pitchbay now
          </h2>
          <p
            className="text-8 mt-5 text-base-light-6 opacity-70"
            style={{ lineHeight: "180%", fontWeight: 375 }}
          >
            Get your own PitchBay and get started <br /> finish your deck faster
          </p>
          <div className="mt-9 mb-29 sm1:mb-0 sm2:mb-0 sm3:mb-0 sm4:mb-0 sm5:mb-0">
            <button
              className="footer-btn-1 bg-base-light-2 text-7 mr-7"
              style={{ lineHeight: "100%", fontWeight: 400 }}
            >
              Try for free
            </button>

            <button
              className="footer-btn-2 text-7 "
              style={{ lineHeight: "100%", fontWeight: 400 }}
            >
              Buy
            </button>
          </div>
          <div className="wireFooter rounded-9">
            <StaticWireFooter />
          </div>
        </div>

        <nav className="nav-footer flex items-center justify-between mt-13">
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className="text-7 text-base-light-7 font-medium leading-4"
                style={{ lineHeight: "150%", fontWeight: 425 }}
              >
                <span className="logo-bottom ">P</span>
                PitchBay
              </a>
            </li>
          </ul>

          <ul className="flex gap-8">
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
          <ul className="flex gap-8">
            <li>
              <span className=" text-base-light-6 text-7 leading-4">
                2022 © PitchBay
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
