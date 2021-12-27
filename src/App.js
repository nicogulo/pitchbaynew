import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/styles/App.css";
import "./assets/styles/globals.css";
import "./assets/styles/dekstop.css";
import "./assets/styles/tablet.css";
import "./assets/styles/mobile.css";

import Navbar from "./components/Navbar";
import MobileNav from "./components/mobile/MobileNav";
import Hero from "./components/Hero";
import Hightlight from "./components/Highlight";
import Platform from "./components/Platform";
import Static from "./components/Static";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MobileNav />
      <div className="container-fluid hero ">
        <Hero />
        <div id="highlight"></div>
        <div className="highlight">
          <Hightlight />
          <div id="features"></div>
        </div>
        <div className="platform">
          <Platform />
        </div>
        <div>
          <Static />
        </div>
        <div className="roadmap">
          <RoadMap />
        </div>
      </div>
      <div className="footer bg-base-dark-7">
        <div className="container-footer  pb-13 pt-30">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
